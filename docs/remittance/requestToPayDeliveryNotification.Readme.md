# Request To Pay Delivery Notification

`Here, requestToPayDeliveryNotification(referenceId: string, message: string, language: string|optional) sends a POST request to /remittance/v1_0/requesttopay/{referenceId}/deliverynotification`

> `This operation is used to send additional Notification to an End User.`

### Usage/Examples

```ts
let environment = new momoApi.core.Environment("<REFERENCE_ID>", "<TARGET_ENVIRONMENT>", "<CALLBACK_URL>", "<OPTIONS>");
let remittance = new momoApi.Remittance(environment);

let response = await remittance.requestToPayDeliveryNotification("<REQUEST_REFERENCE_ID>", "<MESSAGE>");
```

### Response Example

```ts
{
  "status": true
}
```
