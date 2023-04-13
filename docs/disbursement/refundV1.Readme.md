# Refund V1

`Here, refundV1(reference: string, options: object) sends a POST request to /disbursement/v1_0/refund`

> `This operation is used to refund an amount from the owner’s account to a payee account.
Status of the transaction can be validated by using the GET /refund/{referenceId}`

### Usage/Examples

```ts
let environment = new momoApi.core.Environment("<REFERENCE_ID>", "<TARGET_ENVIRONMENT>", "<CALLBACK_URL>", "<OPTIONS>");
let disbursement = new momoApi.Disbursement(environment);

let options = {
  externalId: "<EXTERNAL_ID>",
  amount: "<AMOUNT>",
  currency: "<CURRENCY_CODE>",
  payerMessage: "<PAYER_MESSAGE>",
  payeeNote: "<PAYEE_NOTE>",
  referenceIdToRefund : "<DEPOSIT_REFERENCE_ID>",
};

let response = await disbursement.refundV1("<REQUEST_REFERENCE_ID>", options);

```

### Response Example

```ts
{
  "status": true,
  "referenceId": "016d5f73-4000-4fc6-a4b8-6d16af5b45f1"
}
```