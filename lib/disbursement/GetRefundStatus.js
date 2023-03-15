/**
 * Request to check the status of the particular refund
 */
class GetRefundStatus {
  /**
   *
   * @param {uuid} referenceId - The unique reference ID of the refund   request
   */
  constructor(referenceId) {
    this.url = `/disbursement/v1_0/refund/${referenceId}`;
    this.method = "get";
    this.headers = {};
  }
}

module.exports = {
  GetRefundStatus,
};
