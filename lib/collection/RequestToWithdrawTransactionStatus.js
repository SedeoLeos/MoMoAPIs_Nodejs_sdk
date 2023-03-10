/**
 * An OAuth2 client credentials grant access token request
 */
class RequestToWithdrawTransactionStatus {
  /**
   * 
   * @param {uuid} referenceId - The unique reference ID of the payment request
   */
  constructor(referenceId) {
    this.url = `/collection/v1_0/requesttowithdraw/${referenceId}`;
    this.method = "get";
    this.headers = {
      "X-Target-Environment": "sandbox",
    };
  }
}

module.exports = {
  RequestToWithdrawTransactionStatus,
};
