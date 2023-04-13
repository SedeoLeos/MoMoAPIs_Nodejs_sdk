/**
 * Set up your function to be invoked
 */
const environment = new momoApi.core.Environment(
  process.env.X_REFERENCE_ID,
  process.env.ENV_TYPE,
  process.env.CALLBACK_URL,
  {
    product_type: "disbursement",
    api_key: process.env.API_KEY_DISBURSEMENT,
    subscription_key: process.env.SUBSCRIPTION_KEY_DISBURSEMENT,
    subscription_key2: process.env.SUBSCRIPTION_KEY_DISBURSEMENT_2,
  }
);

const requestToPayDeliveryNotification = async (reference, message, debug = false) => {
  try {
    /**
     * Construct a request object and set desired parameters
     */
    const disbursement = new momoApi.Disbursement(environment);

    const response = await disbursement.requestToPayDeliveryNotification(reference, message);

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
 * Invoke the function
 */
requestToPayDeliveryNotification(reference, message, false);
