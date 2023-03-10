/**
 * Request to check the Status of the particular Payment Transaction
 */
class RequestToPayTransactionStatus {
  /**
   * 
   * @param {uuid} referenceId - The unique reference ID of the payment request
   */
  constructor(referenceId) {
    this.url = `/collection/v1_0/requesttopay/${referenceId}`;
    this.method = "get";
    this.headers = {};
  }
}

module.exports = {
  RequestToPayTransactionStatus,
};
