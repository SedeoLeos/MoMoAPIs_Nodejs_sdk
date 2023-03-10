/**
 * An OAuth2 client credentials grant access token request
 */
class ValidateAccountHolderStatus {
  /**
   * 
   * @param {string} accountHolderId - The account holder number/email/party code, validated according ID type
   * @param {string} accountHolderIdType - The type of the party ID. Allowed values [msisdn, email, party_code]
   */
  constructor(accountHolderId, accountHolderIdType) {
    this.url = `/collection/v1_0/accountholder/${accountHolderIdType}/${accountHolderId}/active`;
    this.method = "get";
    this.headers = {
      "X-Target-Environment": "sandbox",
    };
  }
}

module.exports = {
  ValidateAccountHolderStatus,
};
