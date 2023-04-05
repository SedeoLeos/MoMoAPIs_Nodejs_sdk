"use strict";

describe("RequestToPayDeliveryNotification", () => {
  it("should request delivery notification API", async () => {
    // Arrange
    const referenceId = "ce20fe55-fc5c-4a50-8d5a-43a85e67f928";
    const language = "eng";
    const notificationMessage = "Pay for product a delivery notification";

    // Act

    const response = await global.REMITTANCE.requestToPayDeliveryNotification(
      referenceId,
      notificationMessage,
      language
    );

    // Assert
    expect(response.status).toBe(200);
  });
});
