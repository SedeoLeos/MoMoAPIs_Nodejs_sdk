const { FormEncoded } = require('./serializer');

/**
 * An OAuth2 client credentials grant access token request
 */
class ObtainAnAccessTokenRequest {
  /**
   * @param {MobileMoneyApiEnvironment} environment -
   * The environment for this request (sandbox or live)
   */
  constructor(environment, product_type) {
    const body = {
      grant_type: 'client_credentials',
    };
    let subscription_key = environment.options.collection.subscription_key;
    if (product_type === "remittance") {
      subscription_key = environment.options.remittance.subscription_key;
    } else if (product_type === "disbursement") {
      subscription_key = environment.options.disbursement.subscription_key;
    }
    this.url = `/${product_type}/token/`;
    this.method = 'post';
    this.data = new FormEncoded().encode(body);
    this.headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: environment.authorizationString(product_type),
      'Ocp-Apim-Subscription-Key': subscription_key,
    };
  }
}

module.exports = {
  ObtainAnAccessTokenRequest,
};
