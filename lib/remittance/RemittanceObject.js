/**
 * Remittance object definition
 */
class RemittanceObject {
  constructor() {
    this.data = {};
  }

  notificationMessage(notificationMessage) {
    this.data["notificationMessage"] = notificationMessage;
    return this;
  }

  amount(amount) {
    this.data["amount"] = amount;
    return this;
  }

  currency(currency) {
    this.data["currency"] = currency;
    return this;
  }

  externalId(externalId) {
    this.data["externalId"] = externalId;
    return this;
  }

  payee(payee) {
    this.data["payee"] = payee;
    return this;
  }

  payerMessage(payerMessage) {
    this.data["payerMessage"] = payerMessage;
    return this;
  }

  payeeNote(payeeNote) {
    this.data["payeeNote"] = payeeNote;
    return this;
  }
}

module.exports = { RemittanceObject };
