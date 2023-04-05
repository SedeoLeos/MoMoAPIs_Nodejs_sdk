const { RemittanceObject } = require("./RemittanceObject");

/**
 * Transfer API
 *
 */
class Transfer extends RemittanceObject {
  constructor(referenceId) {
    super();
    this.url = "/remittance/v1_0/transfer";
    this.method = "post";
    this.headers = {
      "X-Reference-Id": referenceId,
    };
  }

  body(body) {
    this.data = body;
  }

  callback(xCallbackUrl) {
    this.headers["X-Callback-URL"] = xCallbackUrl;
    return this;
  }

  contentType(contentType) {
    this.headers["contentType"] = contentType;
    return this;
  }
}

module.exports = { Transfer };
