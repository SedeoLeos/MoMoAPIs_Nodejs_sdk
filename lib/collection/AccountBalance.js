const { FormEncoded } = require('../core/serializer');

/**
 * An OAuth2 client credentials grant access token request
 */
class AccountBalance {
  /**
   * 
   * 
   */
  constructor() {
    this.url = '/collection/v1_0/account/balance';
    this.method = 'get';
    this.headers = {
      'X-Target-Environment': 'sandbox',
    };
  }
}

module.exports = {
  AccountBalance,
};
