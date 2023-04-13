# Get User Information with Consent using Oauth2

`Here, getUserInfoWithConsent(msisdn: string, scope: string|optional|default:profile, access_type: string|optional|default:offline, callbackURL: string|optional) sends a GET request to /collection/oauth2/v1_0/userinfo. Prior to that a POST call will happen to /collection/v1_0/bc-authorize and then to /collection/oauth2/token/ for fetching the Oauth2 token in the background.`

> `This operation returns personal information of the user. The operation needs consent by the user.`

### Usage/Examples

```ts
let environment = new momoApi.core.Environment("<REFERENCE_ID>", "<TARGET_ENVIRONMENT>", "<CALLBACK_URL>", "<OPTIONS>");
let disbursement = new momoApi.Disbursement(environment);

let response = await disbursement.getUserInfoWithConsent("<MSISDN>", "<SCOPE>", "<ACCESS_TYPE>");
```

### Response Example

```ts
{
    "sub": "0",
    "name": "Sand Box",
    "given_name": "Sand",
    "family_name": "Box",
    "birthdate": "1976-08-13",
    "locale": "sv_SE",
    "gender": "MALE",
    "updated_at": 1676538339
}
```
