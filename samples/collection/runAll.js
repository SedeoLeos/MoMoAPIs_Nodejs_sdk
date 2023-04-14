const { v4: uuidv4 } = require("uuid");

const {
  requestToPay,
  getBasicUserinfo,
  createAccessToken,
  getAccountBalance,
  requestToWithdrawV1,
  requestToWithdrawV2,
  getUserInfoWithConsent,
  validateAccountHolderStatus,
  requestToPayTransactionStatus,
  requestToPayDeliveryNotification,
  requestToWithdrawTransactionStatus,
  getAccountBalanceInSpecificCurrency,
} = require("./index");

/**
 * Setting up variables
 */
let currency = "USD";
let msisdn = "0248888736";
let reference = uuidv4();
let referenceV1 = uuidv4();
let referenceV2 = uuidv4();
let options = {
  externalId: "6353636",
  amount: "5.0",
  currency: "EUR",
  payer: {
    partyIdType: "MSISDN",
    partyId: "0248888736",
  },
  payerMessage: "Pay for product A",
  payeeNote: "payer note",
};
let optionsWithdraw = {
  externalId: "15234353",
  amount: "50.0",
  currency: "EUR",
  payer: {
    partyIdType: "MSISDN",
    partyId: "0245565634",
  },
  payerMessage: "withdraw 50 eur",
  payeeNote: "payer note",
};
let message = "Transferred Successfully!!!";
let language = "EN";
let accountHolderId = "0248888736";
let accountHolderIdType = "msisdn";

const usecase1 = async () => {
  console.log("Setup collection product...");

  console.log("POST Create an access token");
  await createAccessToken(true);

  console.log("GET Fetch account balance");
  await getAccountBalance(true);

  console.log("GET Fetch account balance in specific currency");
  await getAccountBalanceInSpecificCurrency(currency, true);

  console.log("GET Fetch basic user info");
  await getBasicUserinfo(msisdn, true);

  console.log("GET Fetch user info with consent");
  await getUserInfoWithConsent(msisdn, true);

  console.log("POST Create a request to pay");
  await requestToPay(reference, options, true);

  console.log("POST Create a delivery notification for the request to pay");
  await requestToPayDeliveryNotification(reference, message, language, true);

  console.log("GET Fetch status of the request to pay");
  await requestToPayTransactionStatus(reference, true);

  console.log("POST Create a version 1 withdraw request");
  await requestToWithdrawV1(referenceV1, optionsWithdraw, true);

  console.log("GET Fetch status of the request to withdraw version 1");
  await requestToWithdrawTransactionStatus(referenceV1, true);

  console.log("POST Create a version 2 withdraw request");
  await requestToWithdrawV1(referenceV2, optionsWithdraw, true);

  console.log("GET Fetch status of the request to withdraw version 1");
  await requestToWithdrawTransactionStatus(referenceV2, true);

  console.log("GET Fetch status of the account holder");
  await validateAccountHolderStatus(accountHolderId, accountHolderIdType, true);
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
