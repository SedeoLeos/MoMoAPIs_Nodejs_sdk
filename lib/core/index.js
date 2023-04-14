const { Environment } = require('./environment');
const { MMApiHttpClient } = require('./MMApiHttpClient');
const { AccessToken } = require('./accessToken');
const { TokenCache } = require('./tokenCache');
const { ObtainAnAccessTokenRequest } = require('./obtainAnAccessTokenRequest');
const { FormEncoded } = require('./serializer');
const { CreateUser, GetCreatedUser, GetAPIKey } = require('./MMSandbox');


class Sandbox {
  /**
   *
   * @param {Environment} environment - The environment data
   */
  constructor(environment) {
    this._client = new MMApiHttpClient(environment);
  }
  
  /**
   * 
   * @param {string} callbackURL
   * @returns {Promise<CreateUser>}
   */
  async createUser(callbackURL) {
    let _request = new CreateUser(this._client.environment, callbackURL);
    let _response = await this._client.execute(_request);
    _response.data = {
      status: true,
      referenceId: this._client.environment.xReferenceId,
    };
    return _response;
  }
  /**
   * 
   * @param {uuid} referenceID
   * @returns {Promise<GetCreatedUser>}
   */
  async getUserDetails(referenceID) {
    let _request = new GetCreatedUser(this._client.environment, referenceID);
    return await this._client.execute(_request);
  }
  
  /**
   * 
   * @param {uuid} referenceID
   * @returns {Promise<GetAPIKey>}
   */
  async createApiKey(referenceID) {
    let _request = new GetAPIKey(this._client.environment, referenceID);
    return await this._client.execute(_request);
  }
}

module.exports = {
  Environment,
  AccessToken,
  ObtainAnAccessTokenRequest,
  MMApiHttpClient,
  TokenCache,
  FormEncoded,
  Sandbox,
};
