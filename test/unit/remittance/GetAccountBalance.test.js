"use strict";

describe('GetAccountBalance', () => {
  it('should fetch the account balance from the API', async () => {
    // Act
    const response = await global.REMITTANCE.getAccountBalance();

    // Assert
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('availableBalance');
    expect(response.data).toHaveProperty('currency', 'EUR');
  });
});