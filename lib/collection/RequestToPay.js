/**
 * An OAuth2 client credentials grant access token request
 */
class RequestToPay {
  /**
   * @param {uuid} xReferenceId - Unique reference ID for the payment, UUID v4 preferred
   * @param {object} options - The additional options required for the payment request
   * @param {number} options.amount - The amount we are transferring
   * @param {string} options.currency - The currency code for the transaction
   * @param {string} options.externalId - External ID of the payee
   * @param {object} options.payer - The additional payer details
   * @param {object} options.payer.partyIdType - Payer ID Tpe
   * @param {object} options.payer.partyId - Payer's party ID
   * @param {string} options.payerMessage - Message by the payer
   * @param {string} options.payeeNote - Note to Payee
   */
  constructor(xReferenceId, options) {
    this.url = '/collection/v1_0/requesttopay';
    this.method = 'post';
    this.data = options;
    this.headers = {
      'Content-Type': 'application/json',
      'X-Reference-Id': xReferenceId,
      'X-Target-Environment': 'sandbox',
    };
  }
}

module.exports = {
  RequestToPay,
};
