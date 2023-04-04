# Request To Withdraw-V2

`Here, requestToWithdrawV2(reference: string, options: object) sends a POST request to /collection/v2_0/requesttowithdraw`

> `This operation is used to request a withdrawal (cash-out) from a consumer (Payer). The payer will be asked to authorize the withdrawal. The transaction will be executed once the payer has authorized the withdrawal`

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

let response = await collection.requestToWithdrawV2("<REQUEST_REFERENCE_ID>", options);
```

### Response Example

```ts
{
  "status": true,
  "referenceId": "0e9edd3a-e6f2-4058-81e5-8c2055f0c249"
}
```