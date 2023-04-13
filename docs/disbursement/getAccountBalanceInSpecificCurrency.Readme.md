# Get Account Balance In Specific Currency

`Here, getAccountBalanceInSpecificCurrency(currency: string) sends a GET request to /disbursement/v1_0/account/balance/{currency}`

> `This operation is used to get the balance of the account. Currency parameter is passed in GET`

### Usage/Examples

```ts
let environment = new momoApi.core.Environment("<REFERENCE_ID>", "<TARGET_ENVIRONMENT>", "<CALLBACK_URL>", "<OPTIONS>");
let disbursement = new momoApi.Disbursement(environment);

let response = await disbursement.getAccountBalanceInSpecificCurrency("<CURRENCY>");
```

### Response Example

```ts
{
  "availableBalance": "0",
  "currency": "EUR"
}
```