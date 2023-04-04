# Request To Pay

`Here, requestToPay(reference: string, options: object) sends a POST request to /collection/v1_0/requesttopay`

> `This operation is used to request a payment from a consumer (Payer). The payer will be asked to authorize the payment. The transaction will be executed once the payer has authorized the payment. The requesttopay will be in status PENDING until the transaction is authorized or declined by the payer or it is timed out by the system. Status of the transaction can be validated by using the GET /requesttopay/<resourceId>.`

### Usage/Examples

```ts
let environment = new momoApi.core.Environment("<REFERENCE_ID>", "<TARGET_ENVIRONMENT>", "<CALLBACK_URL>", "<OPTIONS>");
let collection = new momoApi.Collection(environment);

let options = {
  externalId: "<EXTERNAL_ID>",
  amount: "<AMOUNT>",
  currency: "<CURRENCY_CODE>",
  payer: {
    partyIdType: "<PARTY_ID_TYPE>",
    partyId: "<PARTY_ID>",
  },
  payerMessage: "<PAYER_MESSAGE>",
  payeeNote: "<PAYEE_NOTE>",
};

let response = await collection.requestToPay("<REQUEST_REFERENCE_ID>", options);

```

### Response Example

```ts
{
  "status": true,
  "referenceId": "f104e738-1f09-4e3c-a1ea-be0d4b097ed6"
}
```