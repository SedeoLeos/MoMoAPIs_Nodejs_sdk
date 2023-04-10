const { Environment } = require("../core");
const { MMApiHttpClient } = require("../core/MMApiHttpClient");
const { CreateAccessToken } = require("./CreateAccessToken");
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
   *
   * @returns {Promise<GetUserInfoWithConsent>}
   */
  async getUserInfoWithConsent() {
    let _request = new GetUserInfoWithConsent();
    return await this._client.execute(_request);
  }

  /**
   * @param {uuid} referenceId - UUID of transaction - Reference id used when creating the request to pay.
   * @param {string} language - An ISO 639-1 or ISO 639-3 language code
   *
   * @returns {Promise<RequestToPayDeliveryNotification>}
   */
  async requestToPayDeliveryNotification(referenceId, notificationMessage, language) {
    let _request = new RequestToPayDeliveryNotification();
    return await this._client.execute(_request);
  }

  /**
   * @param {uuid} referenceId - UUID of transaction - Reference id used when creating the request to pay.
   * @param {object} body - Request body
   *
   * @returns {Promise<RequestToPayDeliveryNotification>}
   */
  async Transfer(referenceId, body, callback) {
    let _request = new Transfer(referenceId);

    if (callback) {
      _request.callback(callback);
    }
    
    _request.body(body);
    return await this._client.execute(_request);
  }

  /**
   * @param {uuid} referenceId - UUID of transaction - Reference id used when creating the request to pay.
   * @param {object} body - An ISO 639-1 or ISO 639-3 language code
   *
   * @returns {Promise<RequestToPayDeliveryNotification>}
   */
  async ValidateAccountHolderStatus(accountHolderId, accountHolderIdType) {
    let _request = new ValidateAccountHolderStatus(
      accountHolderId,
      accountHolderIdType
    );
    _request.body(body);
    return await this._client.execute(_request);
  }
}

module.exports = { Remittance };