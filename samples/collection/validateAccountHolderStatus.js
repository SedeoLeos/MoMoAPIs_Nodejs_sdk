"use strict";

/**
 * MoMoApi collection dependency
 */
const collection = require("../test_harness").collection();

/**
 * Setting up variables
 */
let accountHolderId = "0248888736";
let accountHolderIdType = "msisdn";

const validateAccountHolderStatus = async (
  accountHolderID,
  accountHolderType,
  debug = false
) => {
  try {
    const response = await collection.validateAccountHolderStatus(
      accountHolderID,
      accountHolderType
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
      await validateAccountHolderStatus(
        accountHolderId,
        accountHolderIdType,
        true
      );
    } catch (err) {}
  })();
}

/**
 * Exports the function. If needed this can be invoked from the other modules.
 */
module.exports = {
  validateAccountHolderStatus,
};
