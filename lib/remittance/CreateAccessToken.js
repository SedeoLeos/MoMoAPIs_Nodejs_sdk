const { FormEncoded } = require("../core/serializer");

/**
 * A default client credentials grant access token request
 */
class CreateAccessToken {
  /**
   * @param {Environment} environment -
   * The environment for this request (sandbox or live)
   */
  constructor(environment) {
    const body = {
      grant_type: "client_credentials",
    };
    this.url = "/remittance/token/";
    this.method = "post";
    this.data = new FormEncoded().encode(body);
    this.headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: environment.authorizationString(),
      "Ocp-Apim-Subscription-Key": environment.options.subscription_key,
    };
  }

  callback(xCallbackUrl) {
    this.headers["X-Callback-URL"] = xCallbackUrl;
    return this;
  }
}

module.exports = {
  CreateAccessToken,
};
