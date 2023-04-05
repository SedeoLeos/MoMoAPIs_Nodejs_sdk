/**
 * Account balance API
 * 
 */
class GetAccountBalance {
  constructor() {
    this.url = '/remittance/v1_0/account/balance';
    this.method = 'get';
    this.headers = {};
  }
}

module.exports = {
  GetAccountBalance,
};
