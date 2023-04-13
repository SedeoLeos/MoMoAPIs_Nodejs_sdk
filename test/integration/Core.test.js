"use strict";

/**
 * MoMoApi sandbox dependency
 */
const sandbox = require('../test_harness').sandbox();

const createUser = async (callbackURL, debug = false) => {
  try {

    /**
     * Call API with your instance and get a response for your call
     */
    const response = await sandbox.createUser(callbackURL);

    if (debug) {
      console.log("Response Status: ", response.status);
      console.log("Response Data: ", JSON.stringify(response.data, null, 4));
    }

    /**
     * Return a successful response
     */
    return response;
  } catch (err) {
    /**
     * Handle any errors from the call
     */
    if (debug) {
      console.log(err);
    }

    /**
     * Return an error response
     */
    return err;
  }
};

const getUserDetails = async (callbackURL, debug = false) => {
  try {

    /**
     * Call API with your instance and get a response for your call
     */
    const response = await sandbox.getUserDetails(callbackURL);

    if (debug) {
      console.log("Response Status: ", response.status);
      console.log("Response Data: ", JSON.stringify(response.data, null, 4));
    }

    /**
     * Return a successful response
     */
    return response;
  } catch (err) {
    /**
     * Handle any errors from the call
     */
    if (debug) {
      console.log(err);
    }

    /**
     * Return an error response
     */
    return err;
  }
};

const createApiKey = async (callbackURL, debug = false) => {
  try {

    /**
     * Call API with your instance and get a response for your call
     */
    const response = await sandbox.createApiKey(callbackURL);

    if (debug) {
      console.log("Response Status: ", response.status);
      console.log("Response Data: ", JSON.stringify(response.data, null, 4));
    }

    /**
     * Return a successful response
     */
    return response;
  } catch (err) {
    /**
     * Handle any errors from the call
     */
    if (debug) {
      console.log(err);
    }

    /**
     * Return an error response
     */
    return err;
  }
};


describe("Create Sandbox User", () => {
  it("should create a sandbox user with create user API", async () => {
    // Act

    const response = await createUser(global.sandboxCallbackURL, false);

    // Assert
    expect(response.status).toBe(201);
    expect(response.statusText).toBe("Created");
  });
});

describe("Get Sandbox User Details", () => {
  it("should get details of an existing sandbox user", async () => {
    // Act

    const response = await getUserDetails(global.sandboxXReferenceId);

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

    const response = await createApiKey(global.sandboxXReferenceId);

    // Assert
    expect(response.status).toBe(201);
    expect(response.statusText).toBe("Created");
    expect(response.data).toHaveProperty("apiKey");
  });
});