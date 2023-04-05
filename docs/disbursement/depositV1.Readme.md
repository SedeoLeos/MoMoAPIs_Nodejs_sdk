# Deposit V1

`Here, depositV1(reference: string, options: object) sends a POST request to /disbursement/v1_0/deposit`

> `This operation is used to deposit an amount from the owner’s account to a payee account.
Status of the transaction can be validated by using the GET /deposit/{referenceId}`

### Usage/Examples

```ts
let environment = new momoApi.core.Environment("<REFERENCE_ID>", "<TARGET_ENVIRONMENT>", "<CALLBACK_URL>", "<OPTIONS>");
let disbursement = new momoApi.Disbursement(environment);

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

let response = await disbursement.depositV1("<REQUEST_REFERENCE_ID>", options);
```

### Response Example

```ts
{
  "status": true,
  "referenceId": "f104e738-1f09-4e3c-a1ea-be0d4b097ed6"
}
```