# Get AccountBalance In Specific Currency

`Here, getAccountBalanceInSpecificCurrency(currency: string) sends a GET request to /collection/v1_0/account/balance/{currency}`

> `Get the balance of the account. Currency parameter passed in GET request`

### Usage/Examples

```ts
let environment = new momoApi.core.Environment("<REFERENCE_ID>", "<TARGET_ENVIRONMENT>", "<CALLBACK_URL>", "<OPTIONS>");
let collection = new momoApi.Collection(environment);

let response = await collection.getAccountBalanceInSpecificCurrency("<CURRENCY>");
```

### Response Example

```ts
{
  "availableBalance": "0",
  "currency": "EUR"
}
```