/**
 * Set up your function to be invoked
 */
 const environment = new momoApi.core.Environment(
    process.env.X_REFERENCE_ID,
    process.env.ENV_TYPE,
    process.env.CALLBACK_URL,
    {
      product_type: "remittance", // collection, disbursement or remittance
      subscription_key: process.env.SUBSCRIPTION_KEY_REMITTANCE,
      subscription_key2: process.env.SUBSCRIPTION_KEY_REMITTANCE_2,
    }
  );
  
  const createUser = async (callbackHost, debug = false) => {
    try {
      /**
       * Construct a request object and set desired parameters
       */
      const mmSandbox = new momoApi.core.Sandbox(environment); 
      
      const response = await mmSandbox.createUser(callbackHost);
  
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
  createUser();