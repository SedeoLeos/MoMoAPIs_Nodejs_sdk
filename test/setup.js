require("dotenv").config();
const { v4: uuidv4 } = require("uuid");
const { core, Collection, Disbursement, Remittance } = require("../lib");

// set up a test environment
// console.log("Setting up test environment...");

// set up other global mocks or test dependencies here

global.sandboxXReferenceId = uuidv4();
global.sandboxCallbackURL = process.env.CALLBACK_URL;
global.xReferenceIdCollection = process.env.X_REFERENCE_ID_COLLECTION;
global.xReferenceIdDisbursement = process.env.X_REFERENCE_ID_DISBURSEMENT;
global.xReferenceIdRemittance = process.env.X_REFERENCE_ID_REMITTANCE;
global.testMsisdn = "0248888736";

const sandboxEnvironment = new core.Environment(
  global.sandboxXReferenceId,
  process.env.ENV_TYPE,
  process.env.CALLBACK_URL,
  {
    product_type: "collection",
    security: process.env.SECURITY_OPTION,
    subscription_key: process.env.SUBSCRIPTION_KEY_COLLECTION,
    subscription_key2: process.env.SUBSCRIPTION_KEY_COLLECTION_2,
  }
);

const collectionEnvironment = new core.Environment(
  global.xReferenceIdCollection,
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

const disbursementEnvironment = new core.Environment(
  global.xReferenceIdDisbursement,
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

const remittanceEnvironment = new core.Environment(
  global.xReferenceIdRemittance,
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

global.SANDBOX = new core.Sandbox(sandboxEnvironment);
global.COLLECTION = new Collection(collectionEnvironment);
global.DISBURSEMENT = new Disbursement(disbursementEnvironment);
global.REMITTANCE = new Remittance(remittanceEnvironment);


