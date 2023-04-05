/**
 * Remittance transfer status API
 */
class GetTransferStatus {
  /**
   * @param {string} referenceId - Reference id used when creating the request to pay.
   *
   */
  constructor(referenceId) {
    this.url = `/remittance/v1_0/transfer/${referenceId}`;
    this.method = "get";
    this.headers = {};
  }
}

module.exports = { GetTransferStatus };
