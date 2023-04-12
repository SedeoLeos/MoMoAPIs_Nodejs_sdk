"use strict";

const { v4: uuidv4 } = require("uuid");

// Arrange
let referenceV1 = uuidv4();
let referenceV2 = uuidv4();
let options = {
  externalId: "15234353",
  amount: "50.0",
  currency: "EUR",
  payer: {
    partyIdType: "MSISDN",
    partyId: "0245565634",
  },
  payerMessage: "withdraw 50 eur",
  payeeNote: "payer note",
};

describe("Collection - Request To Withdraw V1", () => {
  it("should raise a request to withdraw version 1", async () => {
    // Act
    const response = await global.COLLECTION.requestToWithdrawV1(
      referenceV1,
      options
    );

    // Assert
    expect(response.status).toBe(202);
    expect(response.statusText).toBe("Accepted");
    expect(response.data).toHaveProperty("status", true);
    expect(response.data).toHaveProperty("referenceId", referenceV1);
  });
});



describe("Collection - Request To Withdraw V1 Transaction Status", () => {
  it("should check status of a given request to withdraw v1", async () => {
    // Act
    const response = await global.COLLECTION.requestToWithdrawTransactionStatus(
      referenceV1
    );

    // Assert
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.data).toHaveProperty("financialTransactionId");
    expect(response.data).toHaveProperty("externalId", options.externalId);
    expect(response.data).toHaveProperty("amount", "50");
    expect(response.data).toHaveProperty("currency", options.currency);
    expect(response.data).toHaveProperty("payer", options.payer);
    expect(response.data).toHaveProperty("payerMessage", options.payerMessage);
    expect(response.data).toHaveProperty("payeeNote", options.payeeNote);
    expect(response.data).toHaveProperty("status", "SUCCESSFUL");
  });
});

describe("Collection - Request To Withdraw V2", () => {
  it("should raise a request to withdraw version 2", async () => {
    // Act
    const response = await global.COLLECTION.requestToWithdrawV2(
      referenceV2,
      options
    );

    // Assert
    expect(response.status).toBe(202);
    expect(response.statusText).toBe("Accepted");
    expect(response.data).toHaveProperty("status", true);
    expect(response.data).toHaveProperty("referenceId", referenceV2);
  });
});

describe("Collection - Request To Withdraw V2 Transaction Status", () => {
  it("should check status of a given request to withdraw v2", async () => {
    // Act
    const response = await global.COLLECTION.requestToWithdrawTransactionStatus(
      referenceV2
    );

    // Assert
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.data).toHaveProperty("financialTransactionId");
    expect(response.data).toHaveProperty("externalId", options.externalId);
    expect(response.data).toHaveProperty("amount", "50");
    expect(response.data).toHaveProperty("currency", options.currency);
    expect(response.data).toHaveProperty("payer", options.payer);
    expect(response.data).toHaveProperty("payerMessage", options.payerMessage);
    expect(response.data).toHaveProperty("payeeNote", options.payeeNote);
    expect(response.data).toHaveProperty("status", "SUCCESSFUL");
  });
});