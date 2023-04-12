const { FormEncoded } = require("../core/serializer");
const { RemittanceObject } = require("./RemittanceObject");

/**
 * A default client credentials grant access token request
 */
class CreateOauth2Token extends RemittanceObject {
  /**
   * @param {Environment} environment -
   * The environment for this request (sandbox or live)
   */
  constructor(authReqId) {
    super();
    const body = {
        grant_type: "urn:openid:params:grant-type:ciba",
        auth_req_id: authReqId
    };
    this.url = "/remittance/oauth2/token/";
    this.method = "post";
    this.data = new FormEncoded().encode(body);
    this.headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: environment.authorizationString(),
      "Ocp-Apim-Subscription-Key": environment.options.subscription_key,
    };
  }
}

module.exports = {
  CreateOauth2Token,
};
