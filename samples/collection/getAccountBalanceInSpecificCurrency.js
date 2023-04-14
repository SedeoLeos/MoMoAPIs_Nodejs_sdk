"use strict";

/**
 * MoMoApi collection dependency
 */
const collection = require("../test_harness").collection();

/**
 * Setting up variables
 */
let currency = "USD";

const getAccountBalanceInSpecificCurrency = async (currency, debug = false) => {
  try {
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

/**
 * This module was run directly from the command line as in node xxx.js
 */
if (require.main === module) {
  /**
   * This is an immediately invoked function
   */
  (async () => {
    try {
      await getAccountBalanceInSpecificCurrency(currency, true);
    } catch (err) {}
  })();
}

/**
 * Exports the function. If needed this can be invoked from the other modules.
 */
module.exports = {
  getAccountBalanceInSpecificCurrency,
};
