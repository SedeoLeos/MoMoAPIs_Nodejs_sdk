"use strict";

describe("Create Sandbox User", () => {
  it("should create a sandbox user with create user API", async () => {
    // Act

    const response = await global.SANDBOX.createUser(global.sandboxCallbackURL);

    // Assert
    expect(response.status).toBe(201);
    expect(response.statusText).toBe("Created");
  });
});

describe("Get Sandbox User Details", () => {
  it("should get details of an existing sandbox user", async () => {
    // Act

    const response = await global.SANDBOX.getUserDetails(global.sandboxXReferenceId);

    // Assert
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.data).toHaveProperty("providerCallbackHost", global.sandboxCallbackURL);
    expect(response.data).toHaveProperty("targetEnvironment", "sandbox");
  });
});

describe("Create Api Key for Sandbox User", () => {
  it("should create an api key for an existing sandbox user", async () => {
    // Act

    const response = await global.SANDBOX.createApiKey(global.sandboxXReferenceId);

    // Assert
    expect(response.status).toBe(201);
    expect(response.statusText).toBe("Created");
    expect(response.data).toHaveProperty("apiKey");
  });
});