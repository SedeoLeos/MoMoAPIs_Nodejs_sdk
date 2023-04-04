"use strict";

describe("GetTransferStatus", () => {
  it("should fetch transfer status API", async () => {
    // Arrange
    const referenceId = "79396086-73e1-4694-b6a3-54d6d0e7a879";

    // Act
    const response = await global.REMITTANCE.getTransferStatus(referenceId);

    // Assert
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty(
      "amount",
      "currency",
      "financialTransactionId",
      "externalId",
      "payee",
      "status"
    );
    expect(response.data).toContainEqual({
      status: "SUCCESSFUL",
    });
  });
});
