/**
 * Remittance user info with consent
 *
 */
class GetUserInfoWithConsent {
  constructor() {
    this.url = "/remittance/oauth2/v1_0/userinfo";
    this.method = "get";
    this.headers = {};
  }
}

module.exports = { GetUserInfoWithConsent };
