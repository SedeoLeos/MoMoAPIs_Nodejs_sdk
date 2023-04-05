# Get Account Balance

`Here, getAccountBalance() sends a GET request to /disbursement/v1_0/account/balance`

> `This operation is used to get the balance of the account.`

### Usage/Examples

```ts
let environment = new momoApi.core.Environment("<REFERENCE_ID>", "<TARGET_ENVIRONMENT>", "<CALLBACK_URL>", "<OPTIONS>");
let disbursement = new momoApi.Disbursement(environment);

let response = await disbursement.getAccountBalance();
```

### Response Example

```ts
{
  "availableBalance": "0",
  "currency": "EUR"
}
```