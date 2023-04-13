const { FormEncoded } = require("../core/serializer");
const { RemittanceObject } = require("./RemittanceObject");

/**
 * API to claim a consent by the account holder for the requested scopes.
 */
class BcAuthorize extends RemittanceObject {
  /**
   * @param {Environment} environment -
   * The environment for this request (sandbox or live)
   */
  constructor(environment) {
    super();
    this.url = "/remittance/v1_0/bc-authorize";
    this.method = "post";
    this.headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: environment.authorizationString(),
      "Ocp-Apim-Subscription-Key": environment.options.subscription_key,
    };

    if (this.data) {
      this.data = new FormEncoded().encode(this.data);
    }
  }

  callback(xCallbackUrl) {
    this.headers["X-Callback-URL"] = xCallbackUrl;
    return this;
  }

  body(body) {
    this.data = new FormEncoded().encode(body);
  }
}

module.exports = {
  BcAuthorize,
};
