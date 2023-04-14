const { v4: uuidv4 } = require("uuid");

const {
  transfer,
  getTransferStatus,
  getBasicUserinfo,
  createAccessToken,
  getAccountBalance,
  getUserInfoWithConsent,
  validateAccountHolderStatus,
  requestToPayDeliveryNotification,
} = require("./index");

/**
 * Setting up variables
 */
let msisdn = "0248888736";
let reference = uuidv4();

let options = {
  externalId: "6353636",
  amount: "5.0",
  currency: "EUR",
  payee: {
    partyIdType: "MSISDN",
    partyId: "0248888736",
  },
  payerMessage: "Pay for product A",
  payeeNote: "payer note",
};
let message = "Transferred Successfully!!!";
let language = "EN";
let accountHolderId = "0248888736";
let accountHolderIdType = "msisdn";

const usecase1 = async () => {
  console.log("Setup remittance product...");

  console.log("POST Create an access token");
  await createAccessToken(true);

  console.log("GET Fetch account balance");
  await getAccountBalance(true);

  console.log("GET Fetch basic user info");
  await getBasicUserinfo(msisdn, true);

  console.log("GET Fetch user info with consent");
  await getUserInfoWithConsent(msisdn, true);

  console.log("POST Create a request to transfer");
  await transfer(reference, options, true);

  console.log("GET Fetch status of the request to transfer");
  await getTransferStatus(reference, true);

  console.log("GET Fetch status of the account holder");
  await validateAccountHolderStatus(accountHolderId, accountHolderIdType, true);

  console.log("POST Create a delivery notification for the request to pay");
  await requestToPayDeliveryNotification(reference, message, language, true);
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
