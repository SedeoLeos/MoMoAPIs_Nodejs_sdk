# Create ApiKey

`Here, createApiKey(referenceId: string) sends a POST request to /v1_0/apiuser/{X-Reference-Id}/apikey`

> `Used to create an API key for an API user in the sandbox environment.`

### Usage/Examples

```ts
let environment = new momoApi.core.Environment("<REFERENCE_ID>", "<TARGET_ENVIRONMENT>", "<CALLBACK_URL>", "<OPTIONS>");
let mmSandbox = new momoApi.core.Sandbox(environment);

let response = await mmSandbox.createApiKey("<USER_REFERENCE_ID>");
environment.setAPIKey(response.data.apiKey);
```

### Response Example

```ts
{
  "apiKey": "50bfd1560a7e4ff981f4ba0c2a07b40d"
}
```