# Validate AccountHolder Status

`Here, validateAccountHolderStatus(accountHolderID: string, accountHolderType: string) sends a GET request to /remittance/v1_0/accountholder/{accountHolderIdType}/{accountHolderId}/active`

> `Operation is used to check if an account holder is registered and active in the system.`

### Usage/Examples

```ts
let environment = new momoApi.core.Environment("<REFERENCE_ID>", "<TARGET_ENVIRONMENT>", "<CALLBACK_URL>", "<OPTIONS>");
let remittance = new momoApi.Remittance(environment);

let response = await remittance.validateAccountHolderStatus("<ACCOUNT_HOLDER_ID>", "<ACCOUNT_HOLDER_TYPE>");
```

### Response Example

```ts
{
  "result": true
}
```