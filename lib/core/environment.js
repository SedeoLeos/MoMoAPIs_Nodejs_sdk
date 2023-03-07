const SANDBOX = "https://sandbox.momodeveloper.mtn.com";
const LIVE = "https://sandbox.momodeveloper.mtn.com";

class Environment {
  /**
   * @param {string} xReferenceId - Format - UUID. Resource ID for the API user to be created. UUID version 4 is required.
   * @param {string} type - The type of environment. Either "production" or "sandbox". Default is "sandbox"
   * @param {string} callbackUrl - The callback URL
   * @param {object} options - The additional options required for the environment
   * @param {object} options.product_type - The type of product for the environment
   * @param {object} options.api_key - API key for environment operations
   * @param {object} options.subscription_key - Main subscription key for environment operations
   * @param {object} options.subscription_key_2 - Alternate subscription key for environment operations | optional
   * @param {string} options.security - The security level - DEVELOPMENT_LEVEL, STANDARD_LEVEL, or ENHANCED_LEVEL
   */
  constructor(
    xReferenceId,
    type,
    callbackUrl,
    options
  ) {
    this.baseUrl = type === "production" ? LIVE : SANDBOX;
    this.xReferenceId = xReferenceId;
    this.securityOption = options.security ? options.security : "DEVELOPMENT_LEVEL";
    this.callbackUrl = callbackUrl;
    delete options.security;
    this.options = options;
  }

  setAPIKey(value) {
    this.options.api_key = value;
  }

  setSubscriptionKey(value) {
    this.options.subscription_key = value;
  }

  setSubscriptionKey2(value) {
    this.options.subscription_key_2 = value;
  }

  /**
   * Authorization header string for basic authentication with the current consumer key and secret
   * @return {string} - The authorization header value
   */
  authorizationString() {
    let apiKey = this.options.api_key;
    const encoded = Buffer.from(
      `${this.xReferenceId}:${apiKey}`
    ).toString("base64");
    return `Basic ${encoded}`;
  }
}

module.exports = {
  Environment,
};
