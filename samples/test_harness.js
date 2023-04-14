require("dotenv").config();
const { v4: uuidv4 } = require("uuid");

/**
 * MoMoApi Node JS SDK dependency
 */
const momoApi = require("../lib/index");

/**
 * Setting up and Returns MobileMoneyApi SDK environment with MobileMoneyApi Access credentials.
 * For demo purpose, we are using SandboxEnvironment. In production this will be LiveEnvironment.
 */

const sandboxXReferenceId = uuidv4();

const sandboxEnvironment = () => {
  return new momoApi.core.Environment(
    sandboxXReferenceId,
    process.env.ENV_TYPE,
    process.env.CALLBACK_URL,
    {
      product_type: "collection",
      security: process.env.SECURITY_OPTION,
      subscription_key: process.env.SUBSCRIPTION_KEY_COLLECTION,
      subscription_key2: process.env.SUBSCRIPTION_KEY_COLLECTION_2,
    }
  );
};

const collectionEnvironment = () => {
  return new momoApi.core.Environment(
    process.env.X_REFERENCE_ID_COLLECTION,
    process.env.ENV_TYPE,
    process.env.CALLBACK_URL,
    {
      product_type: "collection",
      api_key: process.env.API_KEY_COLLECTION,
      security: process.env.SECURITY_OPTION,
      subscription_key: process.env.SUBSCRIPTION_KEY_COLLECTION,
      subscription_key2: process.env.SUBSCRIPTION_KEY_COLLECTION_2,
    }
  );
};

const disbursementEnvironment = () => {
  return new momoApi.core.Environment(
    process.env.X_REFERENCE_ID_DISBURSEMENT,
    process.env.ENV_TYPE,
    process.env.CALLBACK_URL,
    {
      product_type: "disbursement",
      api_key: process.env.API_KEY_DISBURSEMENT,
      security: process.env.SECURITY_OPTION,
      subscription_key: process.env.SUBSCRIPTION_KEY_DISBURSEMENT,
      subscription_key2: process.env.SUBSCRIPTION_KEY_DISBURSEMENT_2,
    }
  );
};

const remittanceEnvironment = () => {
  return new momoApi.core.Environment(
    process.env.X_REFERENCE_ID_REMITTANCE,
    process.env.ENV_TYPE,
    process.env.CALLBACK_URL,
    {
      product_type: "remittance",
      api_key: process.env.API_KEY_REMITTANCE,
      security: process.env.SECURITY_OPTION,
      subscription_key: process.env.SUBSCRIPTION_KEY_REMITTANCE,
      subscription_key2: process.env.SUBSCRIPTION_KEY_REMITTANCE_2,
    }
  );
};

/**
 * Returns Sandbox and product instance with respective environment which has access
 * credentials context. This can be used invoke MobileMoneyApi API's provided the
 * credentials have the access to do so.
 */

const sandbox = () => new momoApi.core.Sandbox(sandboxEnvironment());
const collection = () => new momoApi.Collection(collectionEnvironment());
const disbursement = () => new momoApi.Disbursement(disbursementEnvironment());
const remittance = () => new momoApi.Remittance(remittanceEnvironment());

module.exports = {
  sandbox,
  collection,
  disbursement,
  remittance,
  callbackUrl: process.env.CALLBACK_URL,
  sandboxXReferenceId: sandboxXReferenceId,
};
