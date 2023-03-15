const { Environment } = require("../core");
const { MMApiHttpClient } = require("../core/MMApiHttpClient");
const { CreateAccessToken } = require("./CreateAccessToken");
const { Transfer } = require("./Transfer");
const { GetTransferStatus } = require("./GetTransferStatus");
const {
  RequestToPayDeliveryNotification,
} = require("./RequestToPayDeliveryNotification");
const {
  ValidateAccountHolderStatus,
} = require("./ValidateAccountHolderStatus");
const { GetAccountBalance } = require("./GetAccountBalance");
const {
  GetAccountBalanceInSpecificCurrency,
} = require("./GetAccountBalanceInSpecificCurrency");
const { DepositV1 } = require("./DepositV1");
const { DepositV2 } = require("./DepositV2");
const { GetDepositStatus } = require("./GetDepositStatus");
const { RefundV1 } = require("./RefundV1");
const { RefundV2 } = require("./RefundV2");
const { GetRefundStatus } = require("./GetRefundStatus");

class Disbursement {
  /**
   *
   * @param {Environment} environment - The environment data specific to disbursement
   */
  constructor(environment) {
    this._client = new MMApiHttpClient(environment);
  }

  /**
   * This operation is used to create an access token which can then be used to authorize and authenticate towards the other end-points of the disbursement API.
   * @returns {Promise<CreateAccessToken>}
   */
  async createAccessToken() {
    let _request = new CreateAccessToken(this._client.environment);
    return await this._client.execute(_request);
  }

  /**
   * Get the balance of the account
   * @returns {Promise<GetAccountBalance>}
   */
  async getAccountBalance() {
    let _request = new GetAccountBalance();
    return await this._client.execute(_request);
  }

  /**
   * Get the balance of the account in a specific currency
   * @param {string} currency - ISO4217 Currency Code
   * @returns {Promise<GetAccountBalanceInSpecificCurrency>}
   */
  async getAccountBalanceInSpecificCurrency(currency) {
    let _request = new GetAccountBalanceInSpecificCurrency(currency);
    return await this._client.execute(_request);
  }

  /**
   * Transfer operation is used to transfer an amount from the own account to a payee account
   * @param {uuid} referenceId - Unique reference ID for the payment, UUID v4 preferred
   * @param {object} options - The additional options required for the pay request
   * @param {string} options.amount - Amount that will be debited from the payer account
   * @param {string} options.currency - ISO4217 Currency Code
   * @param {string} options.externalId - External id is used as a reference to the transaction, not required to be unique.
   * @param {object} options.payee - The additional payee details, identifies a account holder in the wallet platform
   * @param {string} options.payee.partyIdType - Payee ID Type, should be either MSISDN, EMAIL or PARTY_CODE
   * @param {string} options.payee.partyId - Payee's party ID
   * @param {string} options.payerMessage - Message that will be written in the payer transaction history message field
   * @param {string} options.payeeNote - Message that will be written in the payee transaction history note field
   * @param {string} callbackURL - Call back URL | Optional
   * @returns {Promise<Transfer>}
   */
  async transfer(referenceId, options, callbackURL) {
    let _request = new Transfer(referenceId, options, callbackURL);
    return await this._client.execute(_request);
  }

  /**
   * Check the status of the particular Transfer
   * @param {uuid} referenceId - The unique reference ID of the transfer request
   * @returns {Promise<GetTransferStatus>}
   */
  async getTransferStatus(referenceId) {
    let _request = new GetTransferStatus(referenceId);
    return await this._client.execute(_request);
  }

  /**
   * This operation is used to send additional Notification to an End User
   * @param {uuid} referenceId - The unique reference ID of the payment request
   * @param {string} message - The message to send in the delivery notification | Max length 160
   * @param {string} language - An ISO 639-1 or ISO 639-3 language code | Optional
   * @returns {Promise<RequestToPayDeliveryNotification>}
   */
  async requestToPayDeliveryNotification(referenceId, message, language) {
    let _request = new RequestToPayDeliveryNotification(
      referenceId,
      message,
      language
    );
    return await this._client.execute(_request);
  }

  /**
   * This operation is used to check if an account holder is registered and active in the system
   * @param {string} accountHolderId - The account holder number/email/party code, validated according ID type
   * @param {string} accountHolderIdType - The type of the party ID. Allowed values [msisdn, email, party_code]
   * @returns {Promise<ValidateAccountHolderStatus>}
   */
  async validateAccountHolderStatus(accountHolderId, accountHolderIdType) {
    let _request = new ValidateAccountHolderStatus(
      accountHolderId,
      accountHolderIdType
    );
    return await this._client.execute(_request);
  }

  /**
   * Deposit operation is used to deposit an amount from the owner’s account to a payee account
   * @param {uuid} referenceId - Unique reference ID for the payment, UUID v4 preferred
   * @param {object} options - The additional options required for the pay request
   * @param {string} options.amount - Amount that will be debited from the payer account
   * @param {string} options.currency - ISO4217 Currency Code
   * @param {string} options.externalId - External id is used as a reference to the transaction, not required to be unique.
   * @param {object} options.payee - The additional payee details, identifies a account holder in the wallet platform
   * @param {string} options.payee.partyIdType - Payee ID Type, should be either MSISDN, EMAIL or PARTY_CODE
   * @param {string} options.payee.partyId - Payee's party ID
   * @param {string} options.payerMessage - Message that will be written in the payer transaction history message field
   * @param {string} options.payeeNote - Message that will be written in the payee transaction history note field
   * @param {string} callbackURL - Call back URL | Optional
   * @returns {Promise<DepositV1>}
   */
  async depositV1(referenceId, options, callbackURL) {
    let _request = new DepositV1(referenceId, options, callbackURL);
    return await this._client.execute(_request);
  }

  /**
   * Deposit operation is used to deposit an amount from the owner’s account to a payee account
   * @param {uuid} referenceId - Unique reference ID for the payment, UUID v4 preferred
   * @param {object} options - The additional options required for the pay request
   * @param {string} options.amount - Amount that will be debited from the payer account
   * @param {string} options.currency - ISO4217 Currency Code
   * @param {string} options.externalId - External id is used as a reference to the transaction, not required to be unique.
   * @param {object} options.payee - The additional payee details, identifies a account holder in the wallet platform
   * @param {string} options.payee.partyIdType - Payee ID Type, should be either MSISDN, EMAIL or PARTY_CODE
   * @param {string} options.payee.partyId - Payee's party ID
   * @param {string} options.payerMessage - Message that will be written in the payer transaction history message field
   * @param {string} options.payeeNote - Message that will be written in the payee transaction history note field
   * @param {string} callbackURL - Call back URL | Optional
   * @returns {Promise<DepositV2>}
   */
  async depositV2(referenceId, options, callbackURL) {
    let _request = new DepositV2(referenceId, options, callbackURL);
    return await this._client.execute(_request);
  }

  /**
   * Check the status of the particular Deposit
   * @param {uuid} referenceId - The unique reference ID of the deposit request
   * @returns {Promise<GetDepositStatus>}
   */
  async getDepositStatus(referenceId) {
    let _request = new GetDepositStatus(referenceId);
    return await this._client.execute(_request);
  }

  /**
   * Refund operation is used to refund an amount from the owner’s account to a payee account
   * @param {uuid} referenceId - Unique reference ID for the payment, UUID v4 preferred
   * @param {object} options - The additional options required for the pay request
   * @param {string} options.amount - Amount that will be debited from the payer account
   * @param {string} options.currency - ISO4217 Currency Code
   * @param {string} options.externalId - External id is used as a reference to the transaction, not required to be unique.
   * @param {string} options.payerMessage - Message that will be written in the payer transaction history message field
   * @param {string} options.payeeNote - Message that will be written in the payee transaction history note field
   * @param {string} options.referenceIdToRefund - Resource ID of the created refund transaction, UUID v4 preferred
   * @param {string} callbackURL - Call back URL | Optional
   * @returns {Promise<RefundV1>}
   */
  async refundV1(referenceId, options, callbackURL) {
    let _request = new RefundV1(referenceId, options, callbackURL);
    return await this._client.execute(_request);
  }

  /**
   * Refund operation is used to refund an amount from the owner’s account to a payee account
   * @param {uuid} referenceId - Unique reference ID for the payment, UUID v4 preferred
   * @param {object} options - The additional options required for the pay request
   * @param {string} options.amount - Amount that will be debited from the payer account
   * @param {string} options.currency - ISO4217 Currency Code
   * @param {string} options.externalId - External id is used as a reference to the transaction, not required to be unique.
   * @param {string} options.payerMessage - Message that will be written in the payer transaction history message field
   * @param {string} options.payeeNote - Message that will be written in the payee transaction history note field
   * @param {string} options.referenceIdToRefund - Resource ID of the created refund transaction, UUID v4 preferred
   * @param {string} callbackURL - Call back URL | Optional
   * @returns {Promise<RefundV2>}
   */
  async refundV2(referenceId, options, callbackURL) {
    let _request = new RefundV2(referenceId, options, callbackURL);
    return await this._client.execute(_request);
  }

  /**
   * Check the status of the particular refund
   * @param {uuid} referenceId - The unique reference ID of the refund request
   * @returns {Promise<GetRefundStatus>}
   */
  async getRefundStatus(referenceId) {
    let _request = new GetRefundStatus(referenceId);
    return await this._client.execute(_request);
  }
}

module.exports = {
  Disbursement,
};
