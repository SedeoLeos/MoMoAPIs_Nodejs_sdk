"use strict";

/**
 * MoMoApi sandbox dependency
 */
const collection = require("../test_harness").collection();
const { v4: uuidv4 } = require("uuid");


// Arrange
let reference = uuidv4();
let referenceV1 = uuidv4();
let referenceV2 = uuidv4();
let optionsPay = {
  externalId: "6353636",
  amount: "5.0",
  currency: "EUR",
  payer: {
    partyIdType: "MSISDN",
    partyId: "0248888736",
  },
  payerMessage: "Pay for product A",
  payeeNote: "payer note",
};
let optionsWithdraw = {
  externalId: "15234353",
  amount: "50.0",
  currency: "EUR",
  payer: {
    partyIdType: "MSISDN",
    partyId: "0245565634",
  },
  payerMessage: "withdraw 50 eur",
  payeeNote: "payer note",
};

const createAccessToken = async (debug = false) => {
  try {
    /**
     * Call API with your instance and get a response for your call
     */
    const response = await collection.createAccessToken();

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

const getAccountBalance = async (debug = false) => {
  try {
    /**
     * Call API with your instance and get a response for your call
     */
    const response = await collection.getAccountBalance();

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

const getAccountBalanceInSpecificCurrency = async (currency, debug = false) => {
  try {
    /**
     * Call API with your instance and get a response for your call
     */
    const response = await collection.getAccountBalanceInSpecificCurrency(
      currency
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

const getBasicUserinfo = async (msisdn, debug = false) => {
  try {
    /**
     * Call API with your instance and get a response for your call
     */
    const response = await collection.getBasicUserinfo(msisdn);

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
    const response = await collection.getUserInfoWithConsent(msisdn);

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

const requestToPay = async (reference, options, debug = false) => {
  try {
    /**
     * Call API with your instance and get a response for your call
     */
    const response = await collection.requestToPay(reference, options);

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

const requestToPayDeliveryNotification = async (reference, message, language, debug = false) => {
  try {
    /**
     * Call API with your instance and get a response for your call
     */
    const response = await collection.requestToPayDeliveryNotification(reference, message, language);

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

const requestToPayTransactionStatus = async (reference, debug = false) => {
  try {
    /**
     * Call API with your instance and get a response for your call
     */
    const response = await collection.requestToPayTransactionStatus(reference);

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

const requestToWithdrawV1 = async (reference, options, debug = false) => {
  try {
    /**
     * Call API with your instance and get a response for your call
     */
    const response = await collection.requestToWithdrawV1(reference, options);

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

const requestToWithdrawV2 = async (reference, options, debug = false) => {
  try {
    /**
     * Call API with your instance and get a response for your call
     */
    const response = await collection.requestToWithdrawV2(reference, options);

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

const requestToWithdrawTransactionStatus = async (reference, debug = false) => {
  try {
    /**
     * Call API with your instance and get a response for your call
     */
    const response = await collection.requestToWithdrawTransactionStatus(reference);

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

const validateAccountHolderStatus = async (accountHolderId, accountHolderIdType, debug = false) => {
  try {
    /**
     * Call API with your instance and get a response for your call
     */
    const response = await collection.validateAccountHolderStatus(accountHolderId, accountHolderIdType);

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

describe("Collection - Create Access Token", () => {
  it("should create a access token for collection product", async () => {
    // Act

    const response = await createAccessToken(false);

    // Assert
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.data).toHaveProperty("access_token");
    expect(response.data).toHaveProperty("expires_in");
    expect(response.data).toHaveProperty("token_type", "access_token");
    expect(response.data).toHaveProperty("product_type", "collection");
  });
});

describe("Collection - Get Account Balance", () => {
  it("should get account balance of collection user", async () => {
    // Act

    const response = await getAccountBalance(false);

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

    const response = await getAccountBalanceInSpecificCurrency("USD", false);

    // Assert
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.data).toHaveProperty("availableBalance");
    expect(response.data).toHaveProperty("currency", "USD");
  });
});

describe("Collection - Get User Info", () => {
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

describe("Collection - Get User Info With Consent", () => {
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

describe("Collection - Request To Pay", () => {
  it("should raise a request for payment", async () => {
    // Act
    const response = await requestToPay(reference, optionsPay, false);

    // Assert
    expect(response.status).toBe(202);
    expect(response.statusText).toBe("Accepted");
    expect(response.data).toHaveProperty("status", true);
    expect(response.data).toHaveProperty("referenceId", reference);
  });
});

describe("Collection - Request To Pay Delivery Notification", () => {
  it("should raise a notification to a given request for payment", async () => {
    // Act
    const response = await requestToPayDeliveryNotification(
      reference,
      "Transferred Successfully!!!",
      "EN",
      false
    );

    // Assert
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.data).toHaveProperty("status", true);
  });
});

describe("Collection - Request To Pay Status", () => {
  it("should check status of a given request for payment", async () => {
    // Act
    const response = await requestToPayTransactionStatus(
      reference
    );

    // Assert
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.data).toHaveProperty("financialTransactionId");
    expect(response.data).toHaveProperty("externalId", optionsPay.externalId);
    expect(response.data).toHaveProperty("amount", "5");
    expect(response.data).toHaveProperty("currency", optionsPay.currency);
    expect(response.data).toHaveProperty("payer", optionsPay.payer);
    expect(response.data).toHaveProperty("payerMessage", optionsPay.payerMessage);
    expect(response.data).toHaveProperty("payeeNote", optionsPay.payeeNote);
    expect(response.data).toHaveProperty("status", "SUCCESSFUL");
  });
});

describe("Collection - Request To Withdraw V1", () => {
  it("should raise a request to withdraw version 1", async () => {
    // Act
    const response = await requestToWithdrawV1(
      referenceV1,
      optionsWithdraw
    );

    // Assert
    expect(response.status).toBe(202);
    expect(response.statusText).toBe("Accepted");
    expect(response.data).toHaveProperty("status", true);
    expect(response.data).toHaveProperty("referenceId", referenceV1);
  });
});

describe("Collection - Request To Withdraw V1 Transaction Status", () => {
  it("should check status of a given request to withdraw v1", async () => {
    // Act
    const response = await requestToWithdrawTransactionStatus(
      referenceV1
    );

    // Assert
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.data).toHaveProperty("financialTransactionId");
    expect(response.data).toHaveProperty("externalId", optionsWithdraw.externalId);
    expect(response.data).toHaveProperty("amount", "50");
    expect(response.data).toHaveProperty("currency", optionsWithdraw.currency);
    expect(response.data).toHaveProperty("payer", optionsWithdraw.payer);
    expect(response.data).toHaveProperty("payerMessage", optionsWithdraw.payerMessage);
    expect(response.data).toHaveProperty("payeeNote", optionsWithdraw.payeeNote);
    expect(response.data).toHaveProperty("status", "SUCCESSFUL");
  });
});

describe("Collection - Request To Withdraw V2", () => {
  it("should raise a request to withdraw version 2", async () => {
    // Act
    const response = await requestToWithdrawV2(
      referenceV2,
      optionsWithdraw
    );

    // Assert
    expect(response.status).toBe(202);
    expect(response.statusText).toBe("Accepted");
    expect(response.data).toHaveProperty("status", true);
    expect(response.data).toHaveProperty("referenceId", referenceV2);
  });
});

describe("Collection - Request To Withdraw V2 Transaction Status", () => {
  it("should check status of a given request to withdraw v2", async () => {
    // Act
    const response = await requestToWithdrawTransactionStatus(
      referenceV2
    );

    // Assert
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.data).toHaveProperty("financialTransactionId");
    expect(response.data).toHaveProperty("externalId", optionsWithdraw.externalId);
    expect(response.data).toHaveProperty("amount", "50");
    expect(response.data).toHaveProperty("currency", optionsWithdraw.currency);
    expect(response.data).toHaveProperty("payer", optionsWithdraw.payer);
    expect(response.data).toHaveProperty("payerMessage", optionsWithdraw.payerMessage);
    expect(response.data).toHaveProperty("payeeNote", optionsWithdraw.payeeNote);
    expect(response.data).toHaveProperty("status", "SUCCESSFUL");
  });
});

describe("Collection - Validate Account Holder Status", () => {
  it("should validate an account holder status", async () => {
    //Arrange
    let accountHolderId = "0248888736";
    let accountHolderIdType = "msisdn";

    // Act
    const response = await validateAccountHolderStatus(
      accountHolderId,
      accountHolderIdType
    );

    // Assert
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.data).toHaveProperty("status", true);
  });
});
