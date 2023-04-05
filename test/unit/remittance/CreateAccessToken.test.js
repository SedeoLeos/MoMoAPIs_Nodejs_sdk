"use strict";

describe("Create Access Token", () => {
  it("should create access token with basic authorization API", async () => {
    // Act

    const response = await global.REMITTANCE.createAccessToken();

    // Assert
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty("token_type", "access_token");
  });
});
