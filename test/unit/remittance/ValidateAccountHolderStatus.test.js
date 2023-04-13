"use strict";

describe("ValidateAccountHolderStatus", () => {
  it("should validate accounnt holder status API", async () => {
    // Arrange
    const accountHolderId = '0248888736';
    const accountHolderIdType = 'msisdn';

    // Act
    const response = await global.REMITTANCE.validateAccountHolderStatus(
      accountHolderId,
      accountHolderIdType
    );

    // Assert
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.data).toHaveProperty("status", true);
  });
});
