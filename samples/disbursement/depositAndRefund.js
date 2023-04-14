"use strict";

const { v4: uuidv4 } = require("uuid");

/**
 * MoMoApi disbursement dependency
 */
const disbursement = require("../test_harness").disbursement();

/**
 * Setting up variables
 */
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

const depositV1 = async (reference, options, debug = false) => {
  try {
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

const depositV2 = async (reference, options, debug = false) => {
  try {
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

/**
 * This module was run directly from the command line as in node xxx.js
 */
if (require.main === module) {
  /**
   * This is an immediately invoked function
   */
  (async () => {
    try {
      console.log("POST Create a version 1 deposit request");
      await depositV1(referenceV1, options, true);
    } catch (err) {}
    try {
      console.log("GET Fetch status of the request to deposit version 1");
      await getDepositStatus(referenceV1, true);
    } catch (err) {}
    try {
      console.log("POST Create a version 2 deposit request");
      await depositV2(referenceV2, options, true);
    } catch (err) {}
    try {
      console.log("GET Fetch status of the request to deposit version 2");
      await getDepositStatus(referenceV2, true);
    } catch (err) {}
    try {
      console.log("POST Create a version 1 refund request");
      refundOptions.referenceIdToRefund = referenceV1;
      await refundV1(refundReferenceV1, refundOptions, true);
    } catch (err) {}
    try {
      console.log("GET Fetch status of the request to refund version 1");
      await getRefundStatus(refundReferenceV1, true);
    } catch (err) {}
    try {
      console.log("POST Create a version 2 refund request");
      refundOptions.referenceIdToRefund = referenceV2;
      await refundV2(refundReferenceV2, refundOptions, true);
    } catch (err) {}
    try {
      console.log("GET Fetch status of the request to refund version 2");
      await getRefundStatus(refundReferenceV2, true);
    } catch (err) {}
  })();
}

/**
 * Exports the function. If needed this can be invoked from the other modules.
 */
module.exports = {
  refundV1,
  refundV2,
  depositV1,
  depositV2,
  getDepositStatus,
  getRefundStatus,
};
