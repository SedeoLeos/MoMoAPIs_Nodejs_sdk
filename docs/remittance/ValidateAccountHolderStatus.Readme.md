
# Validate Account Holder Status

`Here, ValidateAccountHolderStatus() creates a GET request to /remittance/v1_0/accountholder/{accountHolderIdType}/{accountHolderId}/active`

> `This endpoint allows to check if an account holder is registered and active in the system.`

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

const ValidateAccountHolderStatus = async (requestObject, debug = false) => {
  try {
    /**
     * Construct a request object and set desired parameters
     */
    const remittance = new mmapi.Remittannce(Environment); 
    
    const response = await remittance.ValidateAccountHolderStatus(
      requestObject.accountHolderId, 
      requestObject.accountHolderIdType
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
 * Invoke the function
 */
const requestObject = {
  accountHolderId: 0248888736,
  accountHolderIdType: "msisdn"
};

ValidateAccountHolderStatus(requestObject);
```

### Example Output - Callback

```javascript
200

{
    "result" : "1"
}
```
