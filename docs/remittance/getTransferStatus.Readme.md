# Get Transfer Status

`Here, getTransferStatus(referenceId: string) sends a GET request to /remittance/v1_0/transfer/{referenceId}`

> `This operation is used to get the status of a transfer. X-Reference-Id that was passed in the POST is used as reference to the request`

### Usage/Examples

```ts
let environment = new momoApi.core.Environment("<REFERENCE_ID>", "<TARGET_ENVIRONMENT>", "<CALLBACK_URL>", "<OPTIONS>");
let remittance = new momoApi.Remittance(environment);

let response = await remittance.getTransferStatus("<REQUEST_REFERENCE_ID>");
```

### Response Example

```ts
{
  "payee": {
    "partyIdType": "MSISDN",
    "partyId": "23423423450"
  },
  "financialTransactionId": "1323837755",
  "status": "SUCCESSFUL",
  "amount": "6",
  "currency": "EUR",
  "externalId": "6353636",
  "payerMessage": "Pay for product a",
  "payeeNote": "payer note"
}
```