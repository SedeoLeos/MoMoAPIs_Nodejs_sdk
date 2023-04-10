
# Transfer

`Here, Transfer() creates a POST request to /remittance/v1_0/transfer`

> `This endpoint allows to transfer an amount from the own account to a payee account.`

### Usage/Examples

```javascript
/**
 * Set up your function to be invoked
 */
const Environment = new mmapi.Environment(
  process.env.X_REFERENCE_ID,
  process.env.ENV_TYPE,
  process.env.CALLBACK_URL,
  {
    product_type: "remittance",
    api_key: process.env.API_KEY_REMITTANCE,
    subscription_key: process.env.SUBSCRIPTION_KEY_REMITTANCE,
    subscription_key2: process.env.SUBSCRIPTION_KEY_REMITTANCE_2,
  }
);

const Transfer = async (requestObject, callback = false, debug = false) => {
  try {
    /**
     * Construct a request object and set desired parameters
     */
    const remittance = new mmapi.Remittannce(Environment); 
    
    const response = await remittance.Transfer(
      requestObject.referenceId, 
      requestObject.requestBody
    );

    if (callback) {
      response.callback(callbackUrl);
    }

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
const requestObject = {
  referenceId: "036997ac-6858-4726-84ca-2a27c481895e",
  requestBody: {
    amount: 2000,
    currency: "EUR",
    externalId: 12345678,
    payee: {
        partyIdType: "MSISDN",
        partyId: 222222
    },
    payerMessage: "Payer message here",
    payeeNote: "Payee note here"
  }
};

RequesttoPayDeliveryNotification(requestObject, false, true);
```

### Example Output - Callback

```javascript
202

{
    "result":"",
    "httpCode" : "202",
    "referenceId": "ecbaa366-93d7-4fef-8f79-e1e83a6815e6"
}
```

---

**NOTE**

In asynchronous flows, a callback mechanism is utilised to allow the client to determine the request's final state.
---