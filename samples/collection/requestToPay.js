"use strict";

const { v4: uuidv4 } = require("uuid");

/**
 * MoMoApi collection dependency
 */
const collection = require("../test_harness").collection();

/**
 * Setting up variables
 */
let reference = uuidv4();
let options = {
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
let message = "Transferred Successfully!!!";
let language = "EN";

const requestToPay = async (reference, options, debug = false) => {
  try {
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

const requestToPayDeliveryNotification = async (
  reference,
  message,
  language,
  debug = false
) => {
  try {
    const response = await collection.requestToPayDeliveryNotification(
      reference,
      message,
      language
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

const requestToPayTransactionStatus = async (reference, debug = false) => {
  try {
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

/**
 * This module was run directly from the command line as in node xxx.js
 */
if (require.main === module) {
  /**
   * This is an immediately invoked function
   */
  (async () => {
    try {
      console.log("POST Create a request to pay");
      await requestToPay(reference, options, true);
    } catch (err) {}
    try {
      console.log("POST Create a delivery notification for the request to pay");
      await requestToPayDeliveryNotification(
        reference,
        message,
        language,
        true
      );
    } catch (err) {}
    try {
      console.log("GET Fetch status of the request to pay");
      await requestToPayTransactionStatus(reference, true);
    } catch (err) {}
  })();
}

/**
 * Exports the function. If needed this can be invoked from the other modules.
 */
module.exports = {
  requestToPay,
  requestToPayDeliveryNotification,
  requestToPayTransactionStatus,
};
