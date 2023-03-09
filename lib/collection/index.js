const { MMApiHttpClient } = require("../core/MMApiHttpClient");
const { CreateAccessToken }  = require("./CreateAccessToken");
const { GetAccountBalance } = require("./GetAccountBalance"); 
const { GetAccountBalanceInSpecificCurrency } = require("./GetAccountBalanceInSpecificCurrency");
const { RequestToPay } = require("./RequestToPay");

class Collection {
  constructor(environment) {
    this._client = new MMApiHttpClient(environment);
  }

  async createAccessToken() {
    let _request = new CreateAccessToken(this._client.environment);
    return await this._client.execute(_request);
  }

  async getAccountBalance() {
    let _request = new GetAccountBalance();
    return await this._client.execute(_request);
  }

  async getAccountBalanceInSpecificCurrency(currency) {
    let _request = new GetAccountBalanceInSpecificCurrency(currency);
    return await this._client.execute(_request);
  }

  async requestToPay(reference, options) {
    let _request = new RequestToPay(reference, options);
    return await this._client.execute(_request);
  }
}

module.exports = {
  Collection,
};
