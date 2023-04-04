# Get Basic User Information

`Here, getBasicUserinfo(msisdn: string) sends a GET request to /collection/v1_0/accountholder/msisdn/{accountHolderMSISDN}/basicuserinfo`

> `This operation returns personal information of the account holder. The operation does not need any consent by the account holder.`

### Usage/Examples

```ts
let environment = new momoApi.core.Environment("<REFERENCE_ID>", "<TARGET_ENVIRONMENT>", "<CALLBACK_URL>", "<OPTIONS>");
let collection = new momoApi.Collection(environment);

let response = await collection.getBasicUserinfo("<MSISDN>");
```

### Response Example

```ts
{
  "given_name": "Sand",
  "family_name": "Box",
  "birthdate": "1976-08-13",
  "locale": "sv_SE",
  "gender": "MALE"
}
```