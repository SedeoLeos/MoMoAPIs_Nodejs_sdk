"use strict";

describe("Collection - Get User Details", () => {
  it("should get details of an existing sandbox user", async () => {
    // Act

    const response = await global.COLLECTION.getBasicUserinfo(global.testMsisdn);

    // Assert
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.data).toHaveProperty("sub");
    expect(response.data).toHaveProperty("name");
    expect(response.data).toHaveProperty("given_name");
    expect(response.data).toHaveProperty("family_name");
    expect(response.data).toHaveProperty("birthdate");
    expect(response.data).toHaveProperty("locale");
    expect(response.data).toHaveProperty("gender");
    expect(response.data).toHaveProperty("updated_at");
  });
});
/*
200 - OK
{
  sub: '0',
  name: 'Sand Box',
  given_name: 'Sand',
  family_name: 'Box',
  birthdate: '1976-08-13',
  locale: 'sv_SE',
  gender: 'MALE',
  updated_at: 1681297060
}
 */