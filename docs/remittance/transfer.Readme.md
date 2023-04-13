# Transfer

`Here, transfer(reference: string, options: object, callbackURL: string|optional) sends a POST request to /remittance/v1_0/transfer`

> `Transfer operation is used to transfer an amount from the own account to a payee account.
Status of the transaction can be validated by using the GET /transfer/{referenceId}`

### Usage/Examples

```ts
let environment = new momoApi.core.Environment("<REFERENCE_ID>", "<TARGET_ENVIRONMENT>", "<CALLBACK_URL>", "<OPTIONS>");
let remittance = new momoApi.Remittance(environment);

let options = {
  externalId: "<EXTERNAL_ID>",
  amount: "<AMOUNT>",
  currency: "<CURRENCY_CODE>",
  payee: {
    partyIdType: "<PARTY_ID_TYPE>",
    partyId: "<PARTY_ID>",
  },
  payerMessage: "<PAYER_MESSAGE>",
  payeeNote: "<PAYEE_NOTE>",
};

let response = await remittance.transfer("<REQUEST_REFERENCE_ID>", options);
```

### Response Example

```ts
{
  "status": true,
  "referenceId": "2d3ae1f4-abe9-477e-a962-e276a5863038"
}
```