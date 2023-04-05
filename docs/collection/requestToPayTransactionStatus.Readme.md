# Request To Pay Transaction Status

`Here, requestToPayTransactionStatus(referenceId: string) sends a GET request to /collection/v1_0/requesttopay/{referenceId}`

> `This operation is used to get the status of a request to pay. X-Reference-Id that was passed in the POST is used as reference to this request.`

### Usage/Examples

```ts
let environment = new momoApi.core.Environment("<REFERENCE_ID>", "<TARGET_ENVIRONMENT>", "<CALLBACK_URL>", "<OPTIONS>");
let collection = new momoApi.Collection(environment);

let response = await collection.requestToPayTransactionStatus("<REQUEST_REFERENCE_ID>");
```

### Response Example

```ts
{
  "payer": {
    "partyIdType": "MSISDN",
    "partyId": "23423423450"
  },
  "financialTransactionId": "1806336820",
  "status": "SUCCESSFUL",
  "amount": "6",
  "currency": "EUR",
  "externalId": "6353636",
  "payerMessage": "Pay for product test",
  "payeeNote": "payer note"
}
```