/**
 * Request to refund an amount from the owner’s account to a payee account
 */
class RefundV1 {
  /**
   * @param {uuid} referenceId - A unique reference ID for the payment, UUID v4 preferred
   * @param {object} options - The additional options required for the pay request
   * @param {string} options.amount - Amount that will be debited from the payer account
   * @param {string} options.currency - ISO4217 Currency Code
   * @param {string} options.externalId - External id is used as a reference to the transaction, not required to be unique.
   * @param {string} options.payerMessage - Message that will be written in the payer transaction history message field
   * @param {string} options.payeeNote - Message that will be written in the payee transaction history note field
   * @param {string} options.referenceIdToRefund - Resource ID of the created refund transaction, UUID v4 preferred
   * @param {string} callbackURL - Call back URL | Optional
   */
  constructor(referenceId, options, callbackURL) {
    this.url = "/disbursement/v1_0/refund";
    this.method = "post";
    this.data = options;
    this.headers = {
      "Content-Type": "application/json",
      "X-Reference-Id": referenceId,
    };
    if (callbackURL !== undefined) {
      this.headers["X-Callback-Url"] = callbackURL;
    }
  }
}

module.exports = {
  RefundV1,
};
