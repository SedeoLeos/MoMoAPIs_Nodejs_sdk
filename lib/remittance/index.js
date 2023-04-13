const { Environment } = require("../core");
const { MMApiHttpClient } = require("../core/MMApiHttpClient");
const { CreateAccessToken } = require("./CreateAccessToken");
const { BcAuthorize } = require("./BcAuthorize");
const { CreateOauth2Token } = require("./CreateOauth2Token");
const { GetBasicUserinfo } = require("./GetBasicUserinfo");
const { GetAccountBalance } = require("./GetAccountBalance");
const { GetTransferStatus } = require("./GetTransferStatus");
const { GetUserInfoWithConsent } = require("./GetUserInfoWithConsent");
const {
  RequestToPayDeliveryNotification,
} = require("./RequesttoPayDeliveryNotification");
const { Transfer } = require("./Transfer");
const {
  ValidateAccountHolderStatus,
} = require("./ValidateAccountHolderStatus");

class Remittance {
  /**
   *
   * @param {Environment} environment - The environment data specific to remittance
   *
   */
  constructor(environment) {
    this._client = new MMApiHttpClient(environment);
  }

  /**
   *
   * @returns {Promise<CreateAccessToken>}
   */
  async createAccessToken() {
    let _request = new CreateAccessToken(this._client.environment);
    return await this._client.execute(_request);
  }

  /**
   *
   * @param {string} msisdn - The MSISDN of the user
   * @returns {Promise<GetBasicUserinfo>}
   */
  async getBasicUserinfo(msisdn) {
    let _request = new GetBasicUserinfo(msisdn);
    return await this._client.execute(_request);
  }

  /**
   *
   * @returns {Promise<GetAccountBalance>}
   */
  async getAccountBalance() {
    let _request = new GetAccountBalance();
    return await this._client.execute(_request);
  }

  /**
   *
   * @param {uuid} referenceId - UUID of transaction - Reference id used when creating the request to pay.
   * @returns {Promise<GetTransferStatus>}
   */
  async getTransferStatus(referenceId) {
    let _request = new GetTransferStatus(referenceId);
    return await this._client.execute(_request);
  }

  /**
   * This operation returns personal information and claims a consent by the account holder for the requested scopes
   * @param {string} msisdn - The MSISDN of the user
   * @param {string} scope - The scope of access | Optional, default: profile
   * @param {string} access_type - Access type | offline/online | Optional, default: offline
   * @param {string} callbackURL - Call back URL | Optional
   * @returns {Promise<GetUserInfoWithConsent>}
   */
  async getUserInfoWithConsent(msisdn, scope, access_type, callbackURL) {
    let _requestA = new BcAuthorize(msisdn, scope, access_type, callbackURL);
    let _responseA = await this._client.execute(_requestA);
    let _requestB = new CreateOauth2Token(
      this._client.environment,
      _responseA.data.auth_req_id
    );
    let _responseB = await this._client.execute(_requestB);
    let _request = new GetUserInfoWithConsent(
      this._client.environment,
      `${_responseB.data.token_type} ${_responseB.data.access_token}`
    );
    let _response = await this._client.execute(_request);
    return _response;
  }

  /**
   * @param {uuid} referenceId - UUID of transaction - Reference id used when creating the request to pay.
   * @param {string} notificationMessage - The message to send in the delivery notification | Max length 160
   * @param {string} language - An ISO 639-1 or ISO 639-3 language code
   *
   * @returns {Promise<RequestToPayDeliveryNotification>}
   */
  async requestToPayDeliveryNotification(
    referenceId,
    notificationMessage,
    language
  ) {
    let _request = new RequestToPayDeliveryNotification(
      referenceId,
      notificationMessage,
      language
    );
    let _response = await this._client.execute(_request);
    _response.data = {
      status: true,
    };
    return _response;
  }

  /**
   * @param {uuid} referenceId - UUID of transaction - Reference id used when creating the request to pay.
   * @param {object} body - Request body
   *
   * @returns {Promise<RequestToPayDeliveryNotification>}
   */
  async transfer(referenceId, body, callback) {
    let _request = new Transfer(referenceId);

    if (callback) {
      _request.callback(callback);
    }

    _request.body(body);
    let _response = await this._client.execute(_request);
    _response.data = {
      status: true,
      referenceId: referenceId,
    };
    return _response;
  }

  /**
   * @param {uuid} referenceId - UUID of transaction - Reference id used when creating the request to pay.
   * @param {object} body - An ISO 639-1 or ISO 639-3 language code
   *
   * @returns {Promise<RequestToPayDeliveryNotification>}
   */
  async validateAccountHolderStatus(accountHolderId, accountHolderIdType) {
    let _request = new ValidateAccountHolderStatus(
      accountHolderId,
      accountHolderIdType
    );
    let _response = await this._client.execute(_request);
    _response.data = {
      status: true,
    };
    return _response;
  }
}

module.exports = { Remittance };
