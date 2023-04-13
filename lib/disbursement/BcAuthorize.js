const { FormEncoded } = require("../core/serializer");

/**
 * Request to claim a consent by the account holder for the requested scopes
 */
class BcAuthorize {
  /**
   * 
   * @param {string} msisdn - The MSISDN of the user
   * @param {string} scope - The scope of access | Optional, default: profile
   * @param {string} access_type - Access type | offline/online | Optional, default: offline
   * @param {string} callbackURL - Call back URL | Optional
   *
   */
  constructor(msisdn, scope, access_type, callbackURL) {
    let body = {
      login_hint: `ID:${msisdn}/MSISDN`,
    };
    let arr = ["offline", "online"];
    if (scope === undefined) {
      body.scope = "profile";
    } else {
      body.scope = scope;
    }
    if (access_type !== undefined && arr.indexOf(access_type) >= 0) {
      body.access_type = access_type;
    } else {
      body.access_type = "offline";
    }
    this.url = "/disbursement/v1_0/bc-authorize";
    this.method = "post";
    this.data = new FormEncoded().encode(body);
    this.headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    };
    if (callbackURL !== undefined) {
      this.headers["X-Callback-Url"] = callbackURL;
    }
  }
}

module.exports = {
  BcAuthorize,
};
