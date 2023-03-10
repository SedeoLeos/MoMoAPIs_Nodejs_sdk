/**
 * Request to get the balance of the account in a specific currency
 */
class GetAccountBalanceInSpecificCurrency {
  /**
   * 
   * @param {string} currency - ISO4217 Currency Code
   */
  constructor(currency) {
    this.url = `/disbursement/v1_0/account/balance/${currency}`;
    this.method = 'get';
    this.headers = {};
  }
}

module.exports = {
  GetAccountBalanceInSpecificCurrency,
};
