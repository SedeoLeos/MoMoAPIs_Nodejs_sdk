# Request To Pay Delivery Notification

`Here, requestToPayDeliveryNotification(referenceId: string, message: string, language: string|optional) sends a POST request to /collection/v1_0/requesttopay/{referenceId}/deliverynotification`

> `This operation is used to send additional Notification to an End User.`

### Usage/Examples

```ts
let environment = new momoApi.core.Environment("<REFERENCE_ID>", "<TARGET_ENVIRONMENT>", "<CALLBACK_URL>", "<OPTIONS>");
let collection = new momoApi.Collection(environment);

let response = await collection.requestToPayDeliveryNotification("<REQUEST_REFERENCE_ID>", "<MESSAGE>");
```

### Response Example

```ts
{
  "status": true
}
```
