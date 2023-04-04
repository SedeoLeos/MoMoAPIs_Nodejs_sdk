"use strict";

describe("GetBasicUserinfo", () => {

  it("should fetch basic user info from the API", async () => {
    // Arrange
    const msisdn = "0248888736";

    // Act
    const response = await global.REMITTANCE.getBasicUserinfo(msisdn);

    // Assert
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty(
      'given_name',
      'family_name',
      'birthdate',
      'locale',
      'gender',
      'status'
    );
  });
});
