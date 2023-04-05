"use strict";
const { v4: uuidv4 } = require('uuid');

describe("Transfer", () => {
  it("should check remittance transfer API", async () => {
    // Arrange
    const referenceId = uuidv4();
    const requestBody = {
        amount: 2000,
        currency: "EUR",
        externalId: 12345678,
        payee: {
            partyIdType: "MSISDN",
            partyId: 222222
        },
        payerMessage: "Payer message here",
        payeeNote: "Payee note here"
      };

    // Act
    const response = await global.REMITTANCE.Transfer(
      referenceId,
      requestBody
    );

    // Assert
    expect(response.status).toBe(202);
  });
});
