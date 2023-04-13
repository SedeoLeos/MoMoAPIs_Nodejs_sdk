
# Get Transfer Status

`Here, GetTransferStatus() creates a GET request to /remittance/v1_0/transfer/{referenceId}`

> `This endpoint allows an end user to get status of a specified transfer.`

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

const GetTransferStatus = async (referenceId, debug = false) => {
  try {
    /**
     * Construct a request object and set desired parameters
     */
    const remittance = new mmapi.Remittannce(Environment); 
    
    const response = await remittance.getTransferStatus(referenceId);

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

const referenceId = "036997ac-6858-4726-84ca-2a27c481895e";

GetTransferStatus(referenceId);
```

### Example Output - Callback

```javascript
200

{
    "amount": 100,
    "currency": "UGX",
    "financialTransactionId": 363440463,
    "externalId": 83453,
    "payee": {
      "partyIdType": "MSISDN",
      "partyId": 4609274685.0
    },
    "status": "SUCCESSFUL",
    "payerMessage": "January Salary",
    "payeeNote": "Any thing we want to type."
  }

```
