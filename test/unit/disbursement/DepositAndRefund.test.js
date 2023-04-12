"use strict";

const { v4: uuidv4 } = require("uuid");

// Arrange
let referenceV1 = uuidv4();
let referenceV2 = uuidv4();
let refundReferenceV1 = uuidv4();
let refundReferenceV2 = uuidv4();
let options = {
  externalId: "15234353",
  amount: "50.0",
  currency: "EUR",
  payee: {
    partyIdType: "MSISDN",
    partyId: "0245565634",
  },
  payerMessage: "deposit 50 eur",
  payeeNote: "payer note",
};
let refundOptions = {
  externalId: "6353636",
  amount: "50.0",
  currency: "EUR",
  payerMessage: "refund 50 eur",
  payeeNote: "payer note",
};

describe("Disbursement - Deposit V1", () => {
  it("should raise a request to deposit version 1", async () => {
    // Act
    const response = await global.DISBURSEMENT.depositV1(referenceV1, options);

    // Assert
    expect(response.status).toBe(202);
    expect(response.statusText).toBe("Accepted");
    expect(response.data).toHaveProperty("status", true);
    expect(response.data).toHaveProperty("referenceId", referenceV1);
  });
});

describe("Disbursement - Deposit V1 Transaction Status", () => {
  it("should check status of a given request to deposit v1", async () => {
    // Act
    const response = await global.DISBURSEMENT.getDepositStatus(referenceV1);

    // Assert
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.data).toHaveProperty("externalId", options.externalId);
    expect(response.data).toHaveProperty("amount", "50");
    expect(response.data).toHaveProperty("currency", options.currency);
    expect(response.data).toHaveProperty("payee", options.payee);
    expect(response.data).toHaveProperty("payerMessage", options.payerMessage);
    expect(response.data).toHaveProperty("payeeNote", options.payeeNote);
    expect(response.data).toHaveProperty("status", "SUCCESSFUL");
  });
});

describe("Disbursement - Deposit V2", () => {
  it("should raise a request to deposit version 2", async () => {
    // Act
    const response = await global.DISBURSEMENT.depositV2(referenceV2, options);

    // Assert
    expect(response.status).toBe(202);
    expect(response.statusText).toBe("Accepted");
    expect(response.data).toHaveProperty("status", true);
    expect(response.data).toHaveProperty("referenceId", referenceV2);
  });
});

describe("Disbursement - Deposit V2 Transaction Status", () => {
  it("should check status of a given request to withdraw v2", async () => {
    // Act
    const response = await global.DISBURSEMENT.getDepositStatus(referenceV2);

    // Assert
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.data).toHaveProperty("externalId", options.externalId);
    expect(response.data).toHaveProperty("amount", "50");
    expect(response.data).toHaveProperty("currency", options.currency);
    expect(response.data).toHaveProperty("payee", options.payee);
    expect(response.data).toHaveProperty("payerMessage", options.payerMessage);
    expect(response.data).toHaveProperty("payeeNote", options.payeeNote);
    expect(response.data).toHaveProperty("status", "SUCCESSFUL");
  });
});

describe("Disbursement - Refund V1", () => {
  it("should raise a request to refund version 1", async () => {
    // Arrange
    refundOptions.referenceIdToRefund = referenceV1;

    // Act
    const response = await global.DISBURSEMENT.refundV1(refundReferenceV1, refundOptions);

    // Assert
    expect(response.status).toBe(202);
    expect(response.statusText).toBe("Accepted");
    expect(response.data).toHaveProperty("status", true);
    expect(response.data).toHaveProperty("referenceId", refundReferenceV1);
  });
});

describe("Disbursement - Refund V1 Transaction Status", () => {
  it("should check status of a given request to refund v1", async () => {
    // Act
    const response = await global.DISBURSEMENT.getRefundStatus(refundReferenceV1);

    // Assert
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.data).toHaveProperty("financialTransactionId");
    expect(response.data).toHaveProperty("externalId", refundOptions.externalId);
    expect(response.data).toHaveProperty("amount", "50");
    expect(response.data).toHaveProperty("currency", refundOptions.currency);
    expect(response.data).toHaveProperty("payerMessage", refundOptions.payerMessage);
    expect(response.data).toHaveProperty("payeeNote", refundOptions.payeeNote);
    expect(response.data).toHaveProperty("status", "SUCCESSFUL");
  });
});

describe("Disbursement - Refund V2", () => {
  it("should raise a request to refund version 2", async () => {
    // Arrange
    refundOptions.referenceIdToRefund = referenceV2;

    // Act
    const response = await global.DISBURSEMENT.refundV2(refundReferenceV2, refundOptions);

    // Assert
    expect(response.status).toBe(202);
    expect(response.statusText).toBe("Accepted");
    expect(response.data).toHaveProperty("status", true);
    expect(response.data).toHaveProperty("referenceId", refundReferenceV2);
  });
});

describe("Disbursement - Refund V2 Transaction Status", () => {
  it("should check status of a given request to refund v2", async () => {
    // Act
    const response = await global.DISBURSEMENT.getRefundStatus(refundReferenceV2);

    // Assert
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.data).toHaveProperty("financialTransactionId");
    expect(response.data).toHaveProperty("externalId", refundOptions.externalId);
    expect(response.data).toHaveProperty("amount", "50");
    expect(response.data).toHaveProperty("currency", refundOptions.currency);
    expect(response.data).toHaveProperty("payerMessage", refundOptions.payerMessage);
    expect(response.data).toHaveProperty("payeeNote", refundOptions.payeeNote);
    expect(response.data).toHaveProperty("status", "SUCCESSFUL");
  });
});
