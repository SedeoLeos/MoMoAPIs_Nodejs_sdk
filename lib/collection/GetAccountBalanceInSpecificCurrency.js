/**
 * An OAuth2 client credentials grant access token request
 */
class GetAccountBalanceInSpecificCurrency {
  /**
   * 
   * @param {string} currency - ISO4217 Currency Code
   */
  constructor(currency) {
    this.url = `/collection/v1_0/account/balance/${currency}`;
    this.method = 'get';
    this.headers = {
      'X-Target-Environment': 'sandbox',
    };
  }
}

module.exports = {
  GetAccountBalanceInSpecificCurrency,
};
