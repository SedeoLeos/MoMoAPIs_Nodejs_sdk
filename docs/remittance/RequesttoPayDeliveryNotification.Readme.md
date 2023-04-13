
# Request to Pay Delivery Notification

`Here, RequesttoPayDeliveryNotification() creates a POST request to /remittance/v1_0/requesttopay/{referenceId}/deliverynotification`

> `This endpoint allows to send an additional notification to end user.`

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

const RequesttoPayDeliveryNotification = async (requestObject, debug = false) => {
  try {
    /**
     * Construct a request object and set desired parameters
     */
    const remittance = new mmapi.Remittannce(Environment); 
    
    const response = await remittance.requesttoPayDeliveryNotification(
      requestObject.referenceId, 
      requestObject.notificationMessage, 
      requestObject.language
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
  referenceId: "036997ac-6858-4726-84ca-2a27c481895e",
  notificationMessage: "Pay for product a delivery notification",
  language: "eng"
};

RequesttoPayDeliveryNotification(requestObject);
```

### Example Output - Callback

```javascript
202

{
    "httpCode" : 202,
    "referenceId" : "a52d1a60-b777-4c0f-a3b1-9957cf74b25e"
}
```
