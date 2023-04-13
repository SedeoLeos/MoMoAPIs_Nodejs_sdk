# Get Refund Status

`Here, getRefundStatus(referenceId: string) sends a GET request to /disbursement/v1_0/refund/{referenceId}`

> `This operation is used to get the status of a refund (of versions V1 and V2). X-Reference-Id that was passed in the POST is used as reference to this request.`

### Usage/Examples

```ts
let environment = new momoApi.core.Environment("<REFERENCE_ID>", "<TARGET_ENVIRONMENT>", "<CALLBACK_URL>", "<OPTIONS>");
let disbursement = new momoApi.Disbursement(environment);

let response = await disbursement.getRefundStatus("<REQUEST_REFERENCE_ID>");
```

### Response Example

```ts
{
  "payee": {
    "partyIdType": "MSISDN",
    "partyId": "23423423450"
  },
  "financialTransactionId": "1947913865",
  "status": "SUCCESSFUL",
  "amount": "6",
  "currency": "EUR",
  "externalId": "6353636",
  "payerMessage": "Pay for product a",
  "payeeNote": "payer note"
}
```