"use strict";

describe("Collection - Validate Account Holder Status", () => {
  it("should validate an account holder status", async () => {
    //Arrange
    let accountHolderId = "0248888736";
    let accountHolderIdType = "msisdn";

    // Act
    const response = await global.COLLECTION.validateAccountHolderStatus(
      accountHolderId,
      accountHolderIdType
    );

    // Assert
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.data).toHaveProperty("status", true);
  });
});
