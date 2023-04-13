/**
 * Request to check the Status of the particular Transfer
 */
class GetTransferStatus {
  /**
   * 
   * @param {uuid} referenceId - The unique reference ID of the transfer request
   */
  constructor(referenceId) {
    this.url = `/disbursement/v1_0/transfer/${referenceId}`;
    this.method = "get";
    this.headers = {};
  }
}

module.exports = {
  GetTransferStatus,
};
