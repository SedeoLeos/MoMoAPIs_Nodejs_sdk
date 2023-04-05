# Get User Details

`Here, getUserDetails(referenceId: string) sends a GET request to /v1_0/apiuser/{X-Reference-Id}`

> `Used to get the information of API user that we created using createUser()`

### Usage/Examples

```ts
let environment = new momoApi.core.Environment("<REFERENCE_ID>", "<TARGET_ENVIRONMENT>", "<CALLBACK_URL>", "<OPTIONS>");
let mmSandbox = new momoApi.core.Sandbox(environment);

let response = await mmSandbox.getUserDetails("<USER_REFERENCE_ID>");
```

### Response Example

```ts
{
  "targetEnvironment": "sandbox",
  "providerCallbackHost": "sample.callback.host"
}
```