# Get Deposit Status

`Here, getDepositStatus(referenceId: string) sends a GET request to /disbursement/v1_0/deposit/{referenceId}`

> `This operation is used to get the status of a deposit (of versions V1 and V2). X-Reference-Id that was passed in the POST is used as reference to this request.`

### Usage/Examples

```ts
let environment = new momoApi.core.Environment("<REFERENCE_ID>", "<TARGET_ENVIRONMENT>", "<CALLBACK_URL>", "<OPTIONS>");
let disbursement = new momoApi.Disbursement(environment);

let response = await disbursement.getDepositStatus("<REQUEST_REFERENCE_ID>");
```

### Response Example

```ts
{
  "payee": {
    "partyIdType": "MSISDN",
    "partyId": "23423423450"
  },
  "status": "SUCCESSFUL",
  "amount": "6",
  "currency": "EUR",
  "externalId": "6353636",
  "payerMessage": "Pay for product a  deposit",
  "payeeNote": "payer note deposit"
}
```