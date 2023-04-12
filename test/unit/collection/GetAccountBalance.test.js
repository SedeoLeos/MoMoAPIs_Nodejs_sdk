"use strict";

describe("Collection - Get Account Balance", () => {
  it("should get account balance of collection user", async () => {
    // Act

    const response = await global.COLLECTION.getAccountBalance();

    // Assert
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.data).toHaveProperty("availableBalance");
    expect(response.data).toHaveProperty("currency", "EUR");
  });
});


describe("Collection - Get Account Balance In Specific Currency", () => {
  it("should get account balance of collection user in specific currency", async () => {
    // Act

    const response = await global.COLLECTION.getAccountBalanceInSpecificCurrency("USD");

    // Assert
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.data).toHaveProperty("availableBalance");
    expect(response.data).toHaveProperty("currency", "USD");
  });
});