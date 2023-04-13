/**
 * Set up your function to be invoked
 */
const environment = new momoApi.core.Environment(
  process.env.X_REFERENCE_ID,
  process.env.ENV_TYPE,
  process.env.CALLBACK_URL,
  {
    product_type: "collection",
    api_key: process.env.API_KEY_COLLECTION,
    subscription_key: process.env.API_KEY_COLLECTION,
    subscription_key2: process.env.API_KEY_COLLECTION_2,
  }
);

const getUserInfoWithConsent = async (msisdn, debug = false) => {
  try {
    /**
     * Construct a request object and set desired parameters
     */
    const collection = new momoApi.Collection(environment);

    const response = await collection.getUserInfoWithConsent(msisdn);

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
getUserInfoWithConsent(msisdn, false);
