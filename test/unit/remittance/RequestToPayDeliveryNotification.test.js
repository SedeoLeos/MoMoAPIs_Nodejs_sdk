"use strict";

describe("Remittance - Request To Pay Delivery Notification", () => {
  it("should raise a notification to a given request to pay", async () => {
    // Arrange
    let reference = "c0dec6d4-fc54-44d2-ab51-c56eced53446";

    // Act
    const response = await global.REMITTANCE.requestToPayDeliveryNotification(
      reference,
      "Transferred Successfully!!!",
      'EN'
    );

    // Assert
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.data).toHaveProperty("status", true);
  });
});
