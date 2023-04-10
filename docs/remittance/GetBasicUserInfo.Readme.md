
# Get Basic User Info

`Here, GetBasicUserInfo() creates a GET request to /remittance/v1_0/accountholder/msisdn/${msisdn}/basicuserinfo`

> `This endpoint allows an end user to get basic user info.`

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

const GetBasicUserInfo = async (msisdn, debug = false) => {
  try {
    /**
     * Construct a request object and set desired parameters
     */
    const remittance = new mmapi.Remittannce(Environment); 
    
    const response = await remittance.getBasicUserInfo(msisdn);

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
const msidsn = 0248888736;

GetBasicUserInfo(msidsn, false, true);
```

### Example Output - Callback

```javascript
200

{
    "sub": "0",
    "name": "Sand Box",
    "given_name": "Sand",
    "family_name": "Box",
    "birthdate": "1976-08-13",
    "locale": "sv_SE",
    "gender": "MALE",
    "updated_at": "1676978048"
  }

```