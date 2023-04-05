# Create A User

`Here, createUser(callbackHost: string) sends a POST request to /v1_0/apiuser`

> `Used to create an API user in the sandbox environment.`

### Usage/Examples

```ts
let environment = new momoApi.core.Environment("<REFERENCE_ID>", "<TARGET_ENVIRONMENT>", "<CALLBACK_URL>", "<OPTIONS>");
let mmSandbox = new momoApi.core.Sandbox(environment);

let response = await mmSandbox.createUser("<CALLBACK_HOST>");
```

### Response Example

```ts
{
  "referenceId": "03a059de-3867-47a6-8481-fa11effee7a4",
  "status": "true"
}
```