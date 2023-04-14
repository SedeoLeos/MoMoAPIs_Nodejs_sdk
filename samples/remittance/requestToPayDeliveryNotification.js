"use strict";

/**
 * MoMoApi remittance dependency
 */
const remittance = require("../test_harness").remittance();

/**
 * Setting up variables
 */
let reference = "3f87f795-5b51-41a4-a45a-e2b8d5c33e85";
let message = "Transferred Successfully!!!";

const requestToPayDeliveryNotification = async (
  reference,
  message,
  debug = false
) => {
  try {
    const response = await remittance.requestToPayDeliveryNotification(
      reference,
      message
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
      await requestToPayDeliveryNotification(reference, message, true);
    } catch (err) {}
  })();
}

/**
 * Exports the function. If needed this can be invoked from the other modules.
 */
module.exports = {
  requestToPayDeliveryNotification,
};
