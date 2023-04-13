"use strict";

/**
 * MoMoApi disbursement dependency
 */
const disbursement = require("../test_harness").disbursement();

const { v4: uuidv4 } = require("uuid");

// Arrange
let reference = uuidv4();
let referenceV1 = uuidv4();
let referenceV2 = uuidv4();
let refundReferenceV1 = uuidv4();
let refundReferenceV2 = uuidv4();
let options = {
  externalId: "15234353",
  amount: "50.0",
  currency: "EUR",
  payee: {
    partyIdType: "MSISDN",
    partyId: "0245565634",
  },
  payerMessage: "deposit 50 eur",
  payeeNote: "payer note",
};
let refundOptions = {
  externalId: "6353636",
  amount: "50.0",
  currency: "EUR",
  payerMessage: "refund 50 eur",
  payeeNote: "payer note",
};
let optionsTransfer = {
  externalId: "6353636",
  amount: "5.0",
  currency: "EUR",
  payee: {
    partyIdType: "MSISDN",
    partyId: "0248888736",
  },
  payerMessage: "Pay for product A",
  payeeNote: "payer note",
};

const createAccessToken = async (debug = false) => {
  try {
    /**
     * Call API with your instance and get a response for your call
     */
    const response = await disbursement.createAccessToken();

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
    const response = await disbursement.getAccountBalance();

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
    const response = await disbursement.getAccountBalanceInSpecificCurrency(
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
    const response = await disbursement.getBasicUserinfo(msisdn);

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
    const response = await disbursement.getUserInfoWithConsent(msisdn);

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

const depositV1 = async (reference, options, debug = false) => {
  try {
    /**
     * Call API with your instance and get a response for your call
     */
    const response = await disbursement.depositV1(reference, options);

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

const depositV2 = async (reference, message, language, debug = false) => {
  try {
    /**
     * Call API with your instance and get a response for your call
     */
    const response = await disbursement.depositV2(reference, options);

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

const getDepositStatus = async (reference, debug = false) => {
  try {
    /**
     * Call API with your instance and get a response for your call
     */
    const response = await disbursement.getDepositStatus(reference);

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

const refundV1 = async (reference, options, debug = false) => {
  try {
    /**
     * Call API with your instance and get a response for your call
     */
    const response = await disbursement.refundV1(reference, options);

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

const refundV2 = async (reference, options, debug = false) => {
  try {
    /**
     * Call API with your instance and get a response for your call
     */
    const response = await disbursement.refundV2(reference, options);

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

const getRefundStatus = async (reference, debug = false) => {
  try {
    /**
     * Call API with your instance and get a response for your call
     */
    const response = await disbursement.getRefundStatus(reference);

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
    const response = await disbursement.transfer(reference, options);

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
    const response = await disbursement.getTransferStatus(reference);

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
    const response = await disbursement.validateAccountHolderStatus(accountHolderId, accountHolderIdType);

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

describe("Disbursement - Create Access Token", () => {
  it("should create a access token for disbursement product", async () => {
    // Act

    const response = await createAccessToken(false);

    // Assert
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.data).toHaveProperty("access_token");
    expect(response.data).toHaveProperty("expires_in");
    expect(response.data).toHaveProperty("token_type", "access_token");
    expect(response.data).toHaveProperty("product_type", "disbursement");
  });
});

describe("Disbursement - Get Account Balance", () => {
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

describe("Disbursement - Get Account Balance In Specific Currency", () => {
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

describe("Disbursement - Get User Info", () => {
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

describe("Disbursement - Get User Info With Consent", () => {
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


describe("Disbursement - Deposit V1", () => {
  it("should raise a request to deposit version 1", async () => {
    // Act
    const response = await depositV1(referenceV1, options, false);

    // Assert
    expect(response.status).toBe(202);
    expect(response.statusText).toBe("Accepted");
    expect(response.data).toHaveProperty("status", true);
    expect(response.data).toHaveProperty("referenceId", referenceV1);
  });
});

describe("Disbursement - Deposit V1 Transaction Status", () => {
  it("should check status of a given request to deposit v1", async () => {
    // Act
    const response = await getDepositStatus(referenceV1, false);

    // Assert
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.data).toHaveProperty("externalId", options.externalId);
    expect(response.data).toHaveProperty("amount", "50");
    expect(response.data).toHaveProperty("currency", options.currency);
    expect(response.data).toHaveProperty("payee", options.payee);
    expect(response.data).toHaveProperty("payerMessage", options.payerMessage);
    expect(response.data).toHaveProperty("payeeNote", options.payeeNote);
    expect(response.data).toHaveProperty("status", "SUCCESSFUL");
  });
});

describe("Disbursement - Deposit V2", () => {
  it("should raise a request to deposit version 2", async () => {
    // Act
    const response = await depositV2(referenceV2, options, false);

    // Assert
    expect(response.status).toBe(202);
    expect(response.statusText).toBe("Accepted");
    expect(response.data).toHaveProperty("status", true);
    expect(response.data).toHaveProperty("referenceId", referenceV2);
  });
});

describe("Disbursement - Deposit V2 Transaction Status", () => {
  it("should check status of a given request to withdraw v2", async () => {
    // Act
    const response = await getDepositStatus(referenceV2, false);

    // Assert
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.data).toHaveProperty("externalId", options.externalId);
    expect(response.data).toHaveProperty("amount", "50");
    expect(response.data).toHaveProperty("currency", options.currency);
    expect(response.data).toHaveProperty("payee", options.payee);
    expect(response.data).toHaveProperty("payerMessage", options.payerMessage);
    expect(response.data).toHaveProperty("payeeNote", options.payeeNote);
    expect(response.data).toHaveProperty("status", "SUCCESSFUL");
  });
});

describe("Disbursement - Refund V1", () => {
  it("should raise a request to refund version 1", async () => {
    // Arrange
    refundOptions.referenceIdToRefund = referenceV1;

    // Act
    const response = await refundV1(refundReferenceV1, refundOptions, false);

    // Assert
    expect(response.status).toBe(202);
    expect(response.statusText).toBe("Accepted");
    expect(response.data).toHaveProperty("status", true);
    expect(response.data).toHaveProperty("referenceId", refundReferenceV1);
  });
});

describe("Disbursement - Refund V1 Transaction Status", () => {
  it("should check status of a given request to refund v1", async () => {
    // Act
    const response = await getRefundStatus(refundReferenceV1, false);

    // Assert
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.data).toHaveProperty("financialTransactionId");
    expect(response.data).toHaveProperty("externalId", refundOptions.externalId);
    expect(response.data).toHaveProperty("amount", "50");
    expect(response.data).toHaveProperty("currency", refundOptions.currency);
    expect(response.data).toHaveProperty("payerMessage", refundOptions.payerMessage);
    expect(response.data).toHaveProperty("payeeNote", refundOptions.payeeNote);
    expect(response.data).toHaveProperty("status", "SUCCESSFUL");
  });
});

describe("Disbursement - Refund V2", () => {
  it("should raise a request to refund version 2", async () => {
    // Arrange
    refundOptions.referenceIdToRefund = referenceV2;

    // Act
    const response = await refundV2(refundReferenceV2, refundOptions, false);

    // Assert
    expect(response.status).toBe(202);
    expect(response.statusText).toBe("Accepted");
    expect(response.data).toHaveProperty("status", true);
    expect(response.data).toHaveProperty("referenceId", refundReferenceV2);
  });
});

describe("Disbursement - Refund V2 Transaction Status", () => {
  it("should check status of a given request to refund v2", async () => {
    // Act
    const response = await getRefundStatus(refundReferenceV2, false);

    // Assert
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.data).toHaveProperty("financialTransactionId");
    expect(response.data).toHaveProperty("externalId", refundOptions.externalId);
    expect(response.data).toHaveProperty("amount", "50");
    expect(response.data).toHaveProperty("currency", refundOptions.currency);
    expect(response.data).toHaveProperty("payerMessage", refundOptions.payerMessage);
    expect(response.data).toHaveProperty("payeeNote", refundOptions.payeeNote);
    expect(response.data).toHaveProperty("status", "SUCCESSFUL");
  });
});

describe("Disbursement - Transfer", () => {
  it("should raise a request for transfer", async () => {
    // Act
    const response = await transfer(
      reference,
      optionsTransfer,
      false
    );

    // Assert
    expect(response.status).toBe(202);
    expect(response.statusText).toBe("Accepted");
    expect(response.data).toHaveProperty("status", true);
    expect(response.data).toHaveProperty("referenceId", reference);
  });
});


describe("Disbursement - Transfer Status", () => {
  it("should check status of a given request for transfer", async () => {
    // Act
    const response = await getTransferStatus(
      reference,
      false
    );

    // Assert
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.data).toHaveProperty("financialTransactionId");
    expect(response.data).toHaveProperty("externalId", optionsTransfer.externalId);
    expect(response.data).toHaveProperty("amount", "5");
    expect(response.data).toHaveProperty("currency", optionsTransfer.currency);
    expect(response.data).toHaveProperty("payee", optionsTransfer.payee);
    expect(response.data).toHaveProperty("payerMessage", optionsTransfer.payerMessage);
    expect(response.data).toHaveProperty("payeeNote", optionsTransfer.payeeNote);
    expect(response.data).toHaveProperty("status", "SUCCESSFUL");
  });
});

describe("Disbursement - Validate Account Holder Status", () => {
  it("should validate an account holder status", async () => {
    //Arrange
    let accountHolderId = "0248888736";
    let accountHolderIdType = "msisdn";

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
