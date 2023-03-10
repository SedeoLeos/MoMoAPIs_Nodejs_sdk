/**
 * An OAuth2 client credentials grant access token request
 */
class GetAccountBalance {
  /**
   * 
   * 
   */
  constructor() {
    this.url = '/collection/v1_0/account/balance';
    this.method = 'get';
    this.headers = {};
  }
}

module.exports = {
  GetAccountBalance,
};
