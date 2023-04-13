/**
 * Request to claim a consent by the account holder for the requested scopes
 */
class GetUserInfoWithConsent {
    /**
     * @param {Environment} environment - The environment for this request (sandbox or live)
     * @param {string} token - The auth2 token
     * 
     */
    constructor(environment, token) {
      this.url = `/collection/oauth2/v1_0/userinfo`;
      this.method = 'get';
      this.headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: token,
        "Ocp-Apim-Subscription-Key": environment.options.subscription_key,
      };
    }
  }
  
  module.exports = {
    GetUserInfoWithConsent,
  };
  