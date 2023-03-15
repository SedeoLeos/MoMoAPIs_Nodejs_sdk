/**
 * Request to check the status of the particular Deposit
 */
class GetDepositStatus {
  /**
   * 
   * @param {uuid} referenceId - The unique reference ID of the transfer request
   */
  constructor(referenceId) {
    this.url = `/disbursement/v1_0/deposit/${referenceId}`;
    this.method = "get";
    this.headers = {};
  }
}

module.exports = {
  GetDepositStatus,
};
