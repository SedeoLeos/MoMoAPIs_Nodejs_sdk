"use strict";

/**
 * MoMoApi sandbox dependency
 */
const sandbox = require("../test_harness").sandbox();

/**
 * Setting up a reference
 */
let reference = require("../test_harness").sandboxXReferenceId;

const getUserDetails = async (reference, debug = false) => {
  try {

    const response = await sandbox.getUserDetails(reference);

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
      await getUserDetails(reference, true);
    } catch (err) {}
  })();
}

/**
 * Exports the function. If needed this can be invoked from the other modules.
 */
module.exports = {
  getUserDetails,
};
