const SANDBOX = "https://sandbox.momodeveloper.mtn.com";
const LIVE = "https://sandbox.momodeveloper.mtn.com";

class Environment {
  /**
   * @param {string} xReferenceId - Format - UUID. Resource ID for the API user to be created. UUID version 4 is required.
   * @param {string} type - The type of environment. Either "production" or "sandbox". Default is "sandbox"
   * @param {string} callbackUrl - The callback URL
   * @param {object} options - The additional options required for the environment
   * @param {object} options.collection - The additional options for collection operations
   * @param {object} options.collection.api_key - API key for collection operations
   * @param {object} options.collection.subscription_key - Main subscription key for collection operations
   * @param {object} options.collection.subscription_key_2 - Alternate subscription key for collection operations | optional
   * @param {object} options.remittance - The additional options for remittance operations
   * @param {object} options.remittance.api_key - API key for remittance operations
   * @param {object} options.remittance.subscription_key - Main subscription key for remittance operations
   * @param {object} options.remittance.subscription_key_2 - Alternate subscription key for remittance operations | optional
   * @param {object} options.disbursement - The additional options for disbursement operations
   * @param {object} options.disbursement.api_key - API key for disbursement operations
   * @param {object} options.disbursement.subscription_key - Main subscription key for disbursement operations
   * @param {object} options.disbursement.subscription_key_2 - Alternate subscription key for disbursement operations | optional
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

  setCollectionToken(value) {
    this.options.collections.subscription_key = value;
  }

  setRemittanceToken(value) {
    this.options.remittance.subscription_key = value;
  }

  setDisbursementToken(value) {
    this.options.disbursement.subscription_key = value;
  }

  setCollectionKey(value) {
    this.collectionToken = value;
  }

  setRemittanceKey(value) {
    this.remittanceToken = value;
  }

  setDisbursementKey(value) {
    this.disbursementToken = value;
  }

  /**
   * Authorization header string for basic authentication with the current consumer key and secret
   * @return {string} - The authorization header value
   */
  authorizationString(product_type) {
    let consumerSecret = this.options.collection.api_key;
    
    if (product_type=== "disbursement") {
      consumerSecret = this.options.disbursement.api_key;
    } else if (product_type === "remittance") {
      consumerSecret = this.options.remittance.api_key;
    }
    const encoded = Buffer.from(
      `${this.xReferenceId}:${consumerSecret}`
    ).toString("base64");
    return `Basic ${encoded}`;
  }
}

module.exports = {
  Environment,
};
