const { HttpClient } = require('./HttpClient');
const { ObtainAnAccessTokenRequest } = require('./obtainAnAccessTokenRequest');
const { AccessToken } = require('./accessToken');
const TokenCache = require('./tokenCache').TokenCache;

/**
 * MMApiHttpClient
 */
class MMApiHttpClient extends HttpClient {
  /**
   * @param {Environment} environment - The environment for this client
   * @param {string} refreshToken - The refreshToken to be used to generate the access Token.
   */
  constructor(environment, refreshToken) {
    super(environment);

    this._cache = TokenCache.cacheForEnvironment(environment);

    this.addInjector(authInjector.bind(this));
  }

  execute(request) {
    return super.execute(request).then((response) => {
      // console.log(response);
      if (request.constructor.name === 'AccessToken') {
        const token_data = response.data;
        token_data.product_type = this.environment.options.product_type;
        const token = new AccessToken(token_data);
        this._cache.setToken(token);
        this._cache.notify();
        this._cache.unlock();
      }
      return Promise.resolve(response);
    }).catch((err) => {
      if (err.status === 401) {
        if (this.environment.securityOption !== 'DEVELOPMENT_LEVEL') {
          return this._retryRequest(request);
        }
      }

      return Promise.reject(err);
    });
  }

  _retryRequest(request) {
    const promise = this._cache.wait(request).then(() => {
      this._setAuthHeader(request);
      return super.execute(request);
    });

    if (this._cache.isLocked()) {
      return promise;
    }

    // Avoids node UnhandledPromiseRejectionWarning on access token failure.
    return Promise.race([this.ObtainAnAccessTokenRequest(), promise]).then(() => promise);
  }

  ObtainAnAccessTokenRequest = async (product_type) => {
    this._cache.lock();
    return super.execute(new ObtainAnAccessTokenRequest(this.environment, product_type))
      .then((response) => {
        response.data.product_type = product_type;
        const token = new AccessToken(response.data);
        this._cache.setToken(token);
        this._cache.notify();
        this._cache.unlock();
        return Promise.resolve(token);
      }).catch((err) => {
        this._cache.setToken(null);
        this._cache.notify(err);
        this._cache.unlock();
        return Promise.reject(err);
      });
  }

  /**
   * Sets the Authorization header for this request based on the client token
   * @param {Object} request - The request to modify
   * @private
   * @return {void}
   */
  _setAuthHeader(request) {
    const token = this._cache.getToken();

    request.headers = request.headers || {};
    request.headers.Authorization = token.authorizationString();
  }

  /**
   * 
   */
  setToken(product_type, token) {
    this._cache.lock();
    token.data.product_type = product_type;
    const _token = new AccessToken(token.data);
    this._cache.setToken(_token);
    this._cache.notify();
    this._cache.unlock();
  }

  /**
   * 
   */
  unsetToken(err) {
    this._cache.lock();
    this._cache.setToken(null);
    this._cache.notify(err);
    this._cache.unlock();
  }
}

function authInjector(request) {
  console.log(request.constructor.name);
  if (request.constructor.name === 'ObtainAnAccessTokenRequest' || request.constructor.name === 'AccessToken') {
    return;
  }

  if (request.hasOwnProperty('headers')) {
    if (request.headers.hasOwnProperty('X-Callback-URL')) {
      request.headers['X-Callback-URL'] = request.headers['X-Callback-URL'] === null ? this.environment.callbackUrl : request.headers['X-Callback-URL'];
    }
  }

  switch (this.environment.securityOption) {
    case 'DEVELOPMENT_LEVEL':
      // request.headers['Ocp-Apim-Subscription-Key'] = this.environment.options.subscription_key;
      // request.url = `${request.url}`;
      // request.headers.Authorization = this.environment.authorizationString();
      // break;
    case 'STANDARD_LEVEL':
    case 'ENHANCED_LEVEL':
      request.headers['Ocp-Apim-Subscription-Key'] = this.environment.options.subscription_key;
      request.url = `${request.url}`;

      if (request.headers.Authorization) {
        return;
      }

      if (this._cache.isValid()) {
        return this._setAuthHeader(request);
      } else if (this._cache.isLocked()) {
        return this._cache.wait(request)
          .then(() => this._setAuthHeader(request));
      } else if (!this._cache.isValid()) {
        return Promise.all([
          this._cache.wait(request),
          this.ObtainAnAccessTokenRequest()
        ])
          .then(() => this._setAuthHeader(request))
        // .catch(() => { });
      }
      break;
    default:
      request.url = `${request.url}`
      break;
  }
}

module.exports = {
  MMApiHttpClient,
};
