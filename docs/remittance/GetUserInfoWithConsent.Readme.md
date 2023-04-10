
# Get User Info With Consent

`Here, GetUserInfoWithConsent() creates a GET request to /remittance/oauth2/v1_0/userinfo`

> `This endpoint allows an end user to claim a consent by the account holder for the requested scopes.`

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

const GetUserInfoWithConsent = async (debug = false) => {
  try {
    /**
     * Construct a request object and set desired parameters
     */
    const remittance = new mmapi.Remittannce(Environment); 
    
    const response = await remittance.getUserInfoWithConsent();

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
GetUserInfoWithConsent();
```

### Example Output - Callback

```javascript
200

{
    "sub": "string",
    "name": "string",
    "given_name": "string",
    "family_name": "string",
    "middle_name": "string",
    "email": "string",
    "email_verified": true,
    "gender": "string",
    "locale": "string",
    "phone_number": "string",
    "phone_number_verified": true,
    "address": "string",
    "updated_at": 0,
    "status": "string",
    "birthdate": "string",
    "credit_score": "string",
    "active": true,
    "country_of_birth": "string",
    "region_of_birth": "string",
    "city_of_birth": "string",
    "occupation": "string",
    "employer_name": "string",
    "identification_type": "string",
    "identification_value": "string"
  }

```
