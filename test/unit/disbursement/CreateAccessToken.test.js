"use strict";

describe("Disbursement - Create Access Token", () => {
  it("should create a access token for disbursement product", async () => {
    // Act

    const response = await global.DISBURSEMENT.createAccessToken();

    // Assert
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.data).toHaveProperty("access_token");
    expect(response.data).toHaveProperty("expires_in");
    expect(response.data).toHaveProperty("token_type", "access_token");
    expect(response.data).toHaveProperty("product_type", "disbursement");
  });
});
