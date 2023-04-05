"use strict";

describe("GetUserInfoWithConsent", () => {

  it("should fetch basic user info with consent from the API", async () => {

    // Act
    const response = await global.REMITTANCE.getUserInfoWithConsent();

    // Assert
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty(
      "sub",
      "name",
      "given_name",
      "family_name",
      "middle_name",
      "email",
      "email_verified",
      "gender",
      "locale",
      "phone_number",
      "phone_number_verified",
      "address",
      "updated_at",
      "status",
      "birthdate",
      "credit_score",
      "active",
      "country_of_birth",
      "region_of_birth",
      "city_of_birth",
      "occupation",
      "employer_name",
      "identification_type",
      "identification_value"
    );
  });
});
