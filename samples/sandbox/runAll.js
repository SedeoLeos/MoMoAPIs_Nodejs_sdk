const { createUser, getUserDetails, createApiKey } = require("./index");

/**
 * Setting up variables
 */
let callbackUrl = require("../test_harness").callbackUrl;
let reference = require("../test_harness").sandboxXReferenceId;

const usecase1 = async () => {
  console.log("Setup sandbox...");

  console.log("POST Create a sandbox user");
  await createUser(callbackUrl, true);

  console.log("GET Get sandbox user details");
  await getUserDetails(reference, true);

  console.log("POST Create a sandbox user API Key");
  await createApiKey(reference, true);
};

(async (usecase) => {
  switch (usecase) {
    case 1:
      await usecase1();
      break;
    default:
      await usecase1();
  }
})();
