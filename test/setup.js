require("dotenv").config();
const { core, Remittance } = require("../lib");

// set up a test environment
console.log("Setting up test environment...");

// set up other global mocks or test dependencies here

const environment = new core.Environment(
  process.env.X_REFERENCE_ID,
  process.env.ENV_TYPE,
  process.env.CALLBACK_URL,
  {
    product_type: "remittance",
    security: "DEVELOPMENT_LEVEL",
    api_key: process.env.API_KEY_REMITTANCE,
    subscription_key: process.env.SUBSCRIPTION_KEY_REMITTANCE,
    subscription_key2: process.env.SUBSCRIPTION_KEY_REMITTANCE_2,
  }
);

global.REMITTANCE = new Remittance(environment);


