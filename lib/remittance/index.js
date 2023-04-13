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
   * @param {string} msisdn - The MSISDN of the user
   * @param {string} scope - Requesting scope
   * @param {string} accessType - Type of access
   *
   * @returns {Promise<GetUserInfoWithConsent>}
   */
  async getUserInfoWithConsent(msisdn, scope, accessType) {
    let _bcAuthorize = await this.bcAuthorize(msisdn, scope, accessType);
    let { data: oauth2Data } = await this.CreateOauth2Token(
      _bcAuthorize.data.auth_req_id
    );

    let _request = new GetUserInfoWithConsent(oauth2Data.access_token);
    return await this._client.execute(_request);
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

  /**
   * @param {string} msisdn - The MSISDN of the user
   * @param {string} scope - Requesting scope
   * @param {string} accessType - Type of access
   *
   * @returns {Promise<BcAuthorize>}
   */
  async bcAuthorize(msisdn, scope, accessType) {
    let _request = new BcAuthorize(this._client.environment);
    _request.loginHint(msisdn);
    _request.scope(scope);
    _request.accessType(accessType);

    return await this._client.execute(_request);
  }

  /**
   *
   * @returns {Promise<BcAuthorize>}
   */
  async CreateOauth2Token(authReqId) {
    let _request = new CreateOauth2Token(authReqId);
    return await this._client.execute(_request);
  }
}

module.exports = { Remittance };
