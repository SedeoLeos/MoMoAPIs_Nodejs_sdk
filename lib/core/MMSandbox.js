class CreateUser {
  constructor(environment, callback_url) {
    // this.environment = environment;
    this.url = "/v1_0/apiuser";
    this.method = "post";
    this.data = {
      providerCallbackHost: callback_url,
    };
    this.headers = {
      "Content-Type": "application/json",
      "X-Reference-Id": environment.xReferenceId,
      "Ocp-Apim-Subscription-Key": environment.options.subscription_key,
    };
  }
}

class GetCreatedUser {
  constructor(environment, referenceID) {
    this.environment = environment;
    this.url = `/v1_0/apiuser/${referenceID}`;
    this.method = "get";
    this.headers = {
      "Ocp-Apim-Subscription-Key": environment.options.subscription_key,
    };
  }
}

class GetAPIKey {
  constructor(environment, referenceID) {
    this.environment = environment;
    this.url = `/v1_0/apiuser/${referenceID}/apikey`;
    this.method = "post";
    this.headers = {
      "Ocp-Apim-Subscription-Key": environment.options.subscription_key,
    };
  }
}


module.exports = {
  CreateUser,
  GetCreatedUser,
  GetAPIKey,
}