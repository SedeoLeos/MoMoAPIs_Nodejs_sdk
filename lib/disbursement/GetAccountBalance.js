/**
 * Request to get the balance of the account
 */
class GetAccountBalance {
  constructor() {
    this.url = "/disbursement/v1_0/account/balance";
    this.method = "get";
    this.headers = {};
  }
}

module.exports = {
  GetAccountBalance,
};
