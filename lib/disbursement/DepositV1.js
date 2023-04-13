/**
 * Request to deposit an amount from the owner’s account to a payee account
 */
class DepositV1 {
  /**
   * @param {uuid} referenceId - A unique reference ID for the payment, UUID v4 preferred
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
   */
  constructor(referenceId, options, callbackURL) {
    this.url = '/disbursement/v1_0/deposit';
    this.method = 'post';
    this.data = options;
    this.headers = {
      'Content-Type': 'application/json',
      'X-Reference-Id': referenceId,
    };
    if(callbackURL !== undefined) {
      this.headers['X-Callback-Url'] = callbackURL;
    }
  }
}

module.exports = {
  DepositV1,
};
