"use strict";

const { v4: uuidv4 } = require("uuid");

// Arrange
let reference = uuidv4();
let options = {
  externalId: "6353636",
  amount: "5.0",
  currency: "EUR",
  payer: {
    partyIdType: "MSISDN",
    partyId: "0248888736",
  },
  payerMessage: "Pay for product A",
  payeeNote: "payer note",
};

describe("Collection - Request To Pay", () => {
  it("should raise a request for payment", async () => {
    // Act
    const response = await global.COLLECTION.requestToPay(
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


describe("Collection - Request To Pay Delivery Notification", () => {
  it("should raise a notification to a given request for payment", async () => {
    // Act
    const response = await global.COLLECTION.requestToPayDeliveryNotification(
      reference,
      "Transferred Successfully!!!"
    );

    // Assert
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.data).toHaveProperty("status", true);
  });
});


describe("Collection - Request To Pay Status", () => {
  it("should check status of a given request for payment", async () => {
    // Act
    const response = await global.COLLECTION.requestToPayTransactionStatus(
      reference
    );

    // Assert
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.data).toHaveProperty("financialTransactionId");
    expect(response.data).toHaveProperty("externalId", options.externalId);
    expect(response.data).toHaveProperty("amount", "5");
    expect(response.data).toHaveProperty("currency", options.currency);
    expect(response.data).toHaveProperty("payer", options.payer);
    expect(response.data).toHaveProperty("payerMessage", options.payerMessage);
    expect(response.data).toHaveProperty("payeeNote", options.payeeNote);
    expect(response.data).toHaveProperty("status", "SUCCESSFUL");
  });
});