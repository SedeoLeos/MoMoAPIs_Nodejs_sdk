"use strict";

const { v4: uuidv4 } = require("uuid");

/**
 * MoMoApi remittance dependency
 */
const remittance = require("../test_harness").remittance();

/**
 * Setting up variables
 */
let reference = uuidv4();
let options = {
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

const transfer = async (reference, options, debug = false) => {
  try {
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

/**
 * This module was run directly from the command line as in node xxx.js
 */
if (require.main === module) {
  /**
   * This is an immediately invoked function
   */
  (async () => {
    try {
      console.log("POST Create a request to transfer");
      await transfer(reference, options, true);
    } catch (err) {}
    try {
      console.log("GET Fetch status of the request to transfer");
      await getTransferStatus(reference, true);
    } catch (err) {}
  })();
}

/**
 * Exports the function. If needed this can be invoked from the other modules.
 */
module.exports = {
  transfer,
  getTransferStatus,
};
