const { FormEncoded } = require('../core/serializer');

/**
 * An OAuth2 client credentials grant access token request
 */
class AccessToken {
  /**
   * @param {Environment} environment -
   * The environment for this request (sandbox or live)
   */
  constructor(environment) {
    const body = {
      grant_type: 'client_credentials',
    };
    this.url = '/collection/token/';
    this.method = 'post';
    this.data = new FormEncoded().encode(body);
    this.headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: environment.authorizationString(),
      'Ocp-Apim-Subscription-Key': environment.options.subscription_key,
    };
  }
}

module.exports = {
    AccessToken,
};
