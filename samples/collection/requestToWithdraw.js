"use strict";

const { v4: uuidv4 } = require("uuid");

/**
 * MoMoApi collection dependency
 */
const collection = require("../test_harness").collection();

/**
 * Setting up variables
 */
let referenceV1 = uuidv4();
let referenceV2 = uuidv4();
let options = {
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

const requestToWithdrawV1 = async (reference, options, debug = false) => {
  try {
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
    const response = await collection.requestToWithdrawTransactionStatus(
      reference
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

/**
 * This module was run directly from the command line as in node xxx.js
 */
if (require.main === module) {
  /**
   * This is an immediately invoked function
   */
  (async () => {
    try {
      console.log("POST Create a version 1 withdraw request");
      await requestToWithdrawV1(referenceV1, options, true);
    } catch (err) {}
    try {
      console.log("GET Fetch status of the request to withdraw version 1");
      await requestToWithdrawTransactionStatus(referenceV1, true);
    } catch (err) {}
    try {
      console.log("POST Create a version 2 withdraw request");
      await requestToWithdrawV1(referenceV2, options, true);
    } catch (err) {}
    try {
      console.log("GET Fetch status of the request to withdraw version 2");
      await requestToWithdrawTransactionStatus(referenceV2, true);
    } catch (err) {}
  })();
}

/**
 * Exports the function. If needed this can be invoked from the other modules.
 */
module.exports = {
  requestToWithdrawV1,
  requestToWithdrawV2,
  requestToWithdrawTransactionStatus,
};
