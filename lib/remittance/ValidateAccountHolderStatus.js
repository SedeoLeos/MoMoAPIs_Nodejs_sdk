/**
 * Remittance - Validate account holder status API
 */
class ValidateAccountHolderStatus {
  /**
   *
   * @param {string} accountHolderId - The account holder number/email/party code, validated according ID type
   * @param {string} accountHolderIdType - The type of the party ID. Allowed values [msisdn, email, party_code]
   */
  constructor(accountHolderId, accountHolderIdType) {
    this.url = `/remittance/v1_0/accountholder/${accountHolderIdType}/${accountHolderId}/active`;
    this.method = "get";
    this.headers = {}; 
  }
}

module.exports = {
  ValidateAccountHolderStatus,
};
