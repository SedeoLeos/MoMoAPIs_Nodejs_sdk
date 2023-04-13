# Get AccountBalance

`Here, getAccountBalance() sends a GET request to /remittance/v1_0/account/balance`

> `Get the balance of the account.`

### Usage/Examples

```ts
let environment = new momoApi.core.Environment("<REFERENCE_ID>", "<TARGET_ENVIRONMENT>", "<CALLBACK_URL>", "<OPTIONS>");
let remittance = new momoApi.Remittance(environment);

let response = await remittance.getAccountBalance();
```

### Response Example

```ts
{
  "availableBalance": "0",
  "currency": "EUR"
}
```