"use strict";

/**
 * MoMoApi remittance dependency
 */
const remittance = require("../test_harness").remittance();

/**
 * Setting up variables
 */
let msisdn = "0248888736";

const getUserInfoWithConsent = async (msisdn, debug = false) => {
  try {
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

/**
 * This module was run directly from the command line as in node xxx.js
 */
if (require.main === module) {
  /**
   * This is an immediately invoked function
   */
  (async () => {
    try {
      await getUserInfoWithConsent(msisdn, true);
    } catch (err) {}
  })();
}

/**
 * Exports the function. If needed this can be invoked from the other modules.
 */
module.exports = {
  getUserInfoWithConsent,
};
