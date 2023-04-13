/**
 * Remittance user info with consent
 *
 */
class GetUserInfoWithConsent {
  constructor(oauth2Token) {
    this.url = "/remittance/oauth2/v1_0/userinfo";
    this.method = "get";
    this.headers = {
      Authorization: `Bearer ${oauth2Token}`,
    };
  }
}

module.exports = { GetUserInfoWithConsent };
