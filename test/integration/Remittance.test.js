"use strict";

/**
 * MoMoApi collection dependency
 */
const remittance = require("../test_harness").remittance();

const { v4: uuidv4 } = require("uuid");

// Arrange
const reference = uuidv4();
const options = {
  amount: "2000",
  currency: "EUR",
  externalId: "12345678",
  payee: {
    partyIdType: "MSISDN",
    partyId: "222222",
  },
  payerMessage: "Payer message here",
  payeeNote: "Payee note here",
};

const createAccessToken = async (debug = false) => {
  try {
    /**
     * Call API with your instance and get a response for your call
     */
    const response = await remittance.createAccessToken();

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

const getBasicUserinfo = async (msisdn, debug = false) => {
  try {
    /**
     * Call API with your instance and get a response for your call
     */
    const response = await remittance.getBasicUserinfo(msisdn);

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

const getUserInfoWithConsent = async (msisdn, debug = false) => {
  try {
    /**
     * Call API with your instance and get a response for your call
     */
    const response = await remittance.getUserInfoWithConsent(msisdn);

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

const transfer = async (reference, options, debug = false) => {
  try {
    /**
     * Call API with your instance and get a response for your call
     */
    const response = await remittance.transfer(reference, options);

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

const getTransferStatus = async (reference, debug = false) => {
  try {
    /**
     * Call API with your instance and get a response for your call
     */
    const response = await remittance.getTransferStatus(reference);

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

const validateAccountHolderStatus = async (
  accountHolderId,
  accountHolderIdType,
  debug = false
) => {
  try {
    /**
     * Call API with your instance and get a response for your call
     */
    const response = await remittance.validateAccountHolderStatus(
      accountHolderId,
      accountHolderIdType
    );

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

describe("Create Access Token", () => {
  it("should create access token with basic authorization API", async () => {
    // Act

    const response = await createAccessToken(false);

    // Assert
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty("token_type", "access_token");
  });
});

describe("Remittance - Get User Info", () => {
  it("should get details of an existing collection user", async () => {
    // Act
    const response = await getBasicUserinfo(global.testMsisdn, false);

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

describe("Remittance - Get User Info With Consent", () => {
  it("should get details of an existing collection user with consent", async () => {
    // Act
    const response = await getUserInfoWithConsent(global.testMsisdn, false);

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

describe("Remittance - Transfer", () => {
  it("should raise a request for transfer", async () => {
    // Act
    const response = await transfer(reference, options, false);

    // Assert
    expect(response.status).toBe(202);
    expect(response.statusText).toBe("Accepted");
    expect(response.data).toHaveProperty("status", true);
    expect(response.data).toHaveProperty("referenceId", reference);
  });
});

describe("Remittance - Transfer Status", () => {
  it("should check status of a given request for transfer", async () => {
    // Act
    const response = await getTransferStatus(reference, false);

    // Assert
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.data).toHaveProperty("financialTransactionId");
    expect(response.data).toHaveProperty("externalId", options.externalId);
    expect(response.data).toHaveProperty("amount", "2000");
    expect(response.data).toHaveProperty("currency", options.currency);
    expect(response.data).toHaveProperty("payee", options.payee);
    expect(response.data).toHaveProperty("payerMessage", options.payerMessage);
    expect(response.data).toHaveProperty("payeeNote", options.payeeNote);
    expect(response.data).toHaveProperty("status", "SUCCESSFUL");
  });
});

describe("ValidateAccountHolderStatus", () => {
  it("should validate accounnt holder status API", async () => {
    // Arrange
    const accountHolderId = "0248888736";
    const accountHolderIdType = "msisdn";

    // Act
    const response = await validateAccountHolderStatus(
      accountHolderId,
      accountHolderIdType,
      false
    );

    // Assert
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.data).toHaveProperty("status", true);
  });
});
