"use strict";
const { v4: uuidv4 } = require("uuid");

// Arrange
const reference = uuidv4();
const options = {
  amount: "2000",
  currency: "EUR",
  externalId: "12345678",
  payee: {
    partyIdType: "MSISDN",
    partyId: "222222",
  },
  payerMessage: "Payer message here",
  payeeNote: "Payee note here",
};

describe("Remittance - Transfer", () => {
  it("should raise a request for transfer", async () => {
    // Act
    const response = await global.REMITTANCE.transfer(
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


describe("Remittance - Transfer Status", () => {
  it("should check status of a given request for transfer", async () => {
    // Act
    const response = await global.REMITTANCE.getTransferStatus(
      reference
    );

    // Assert
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.data).toHaveProperty("financialTransactionId");
    expect(response.data).toHaveProperty("externalId", options.externalId);
    expect(response.data).toHaveProperty("amount", "2000");
    expect(response.data).toHaveProperty("currency", options.currency);
    expect(response.data).toHaveProperty("payee", options.payee);
    expect(response.data).toHaveProperty("payerMessage", options.payerMessage);
    expect(response.data).toHaveProperty("payeeNote", options.payeeNote);
    expect(response.data).toHaveProperty("status", "SUCCESSFUL");
  });
});
