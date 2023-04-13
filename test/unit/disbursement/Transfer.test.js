"use strict";

const { v4: uuidv4 } = require("uuid");

// Arrange
let reference = uuidv4();
let options = {
  externalId: "6353636",
  amount: "5.0",
  currency: "EUR",
  payee: {
    partyIdType: "MSISDN",
    partyId: "0248888736",
  },
  payerMessage: "Pay for product A",
  payeeNote: "payer note",
};

describe("Disbursement - Transfer", () => {
  it("should raise a request for transfer", async () => {
    // Act
    const response = await global.DISBURSEMENT.transfer(
      reference,
      options
    );

    // Assert
    expect(response.status).toBe(202);
    expect(response.statusText).toBe("Accepted");
    expect(response.data).toHaveProperty("status", true);
    expect(response.data).toHaveProperty("referenceId", reference);
  });
});


describe("Disbursement - Transfer Status", () => {
  it("should check status of a given request for transfer", async () => {
    // Act
    const response = await global.DISBURSEMENT.getTransferStatus(
      reference
    );

    // Assert
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.data).toHaveProperty("financialTransactionId");
    expect(response.data).toHaveProperty("externalId", options.externalId);
    expect(response.data).toHaveProperty("amount", "5");
    expect(response.data).toHaveProperty("currency", options.currency);
    expect(response.data).toHaveProperty("payee", options.payee);
    expect(response.data).toHaveProperty("payerMessage", options.payerMessage);
    expect(response.data).toHaveProperty("payeeNote", options.payeeNote);
    expect(response.data).toHaveProperty("status", "SUCCESSFUL");
  });
});