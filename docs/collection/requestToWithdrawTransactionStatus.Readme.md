# Request To Withdraw Transaction Status

`Here, requestToWithdrawTransactionStatus(referenceId: string) sends a GET request to /collection/v1_0/requesttowithdraw/{referenceId}`

> `This operation is used to get the status of a request to withdraw (of both versions V1 and V2). X-Reference-Id that was passed in the POST is used as reference to the request.`

### Usage/Examples

```ts
let environment = new momoApi.core.Environment("<REFERENCE_ID>", "<TARGET_ENVIRONMENT>", "<CALLBACK_URL>", "<OPTIONS>");
let collection = new momoApi.Collection(environment);

let withdrawReqStat = await collection.requestToWithdrawTransactionStatus("<REQUEST_REFERENCE_ID>");
```

### Response Example

```ts
{
  "payer": {
    "partyIdType": "MSISDN",
    "partyId": "23423423450"
  },
  "financialTransactionId": "85974752",
  "status": "SUCCESSFUL",
  "amount": "6",
  "currency": "EUR",
  "externalId": "6353636",
  "payerMessage": "Pay for product a",
  "payeeNote": "payer note"
}
```