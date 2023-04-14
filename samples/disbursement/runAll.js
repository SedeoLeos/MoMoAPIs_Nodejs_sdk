const { v4: uuidv4 } = require("uuid");

const {
  transfer,
  refundV1,
  refundV2,
  depositV1,
  depositV2,
  getRefundStatus,
  getDepositStatus,
  getTransferStatus,
  getBasicUserinfo,
  createAccessToken,
  getAccountBalance,
  getUserInfoWithConsent,
  validateAccountHolderStatus,
  requestToPayDeliveryNotification,
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
let refundReferenceV1 = uuidv4();
let refundReferenceV2 = uuidv4();
let options = {
  externalId: "15234353",
  amount: "50.0",
  currency: "EUR",
  payee: {
    partyIdType: "MSISDN",
    partyId: "0245565634",
  },
  payerMessage: "deposit 50 eur",
  payeeNote: "payer note",
};
let refundOptions = {
  externalId: "6353636",
  amount: "50.0",
  currency: "EUR",
  payerMessage: "refund 50 eur",
  payeeNote: "payer note",
};
let transferOptions = {
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
  console.log("Setup disbursement product...");

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

  console.log("POST Create a version 1 deposit request");
  await depositV1(referenceV1, options, true);

  console.log("GET Fetch status of the request to deposit version 1");
  await getDepositStatus(referenceV1, true);

  console.log("POST Create a version 2 deposit request");
  await depositV2(referenceV2, options, true);

  console.log("GET Fetch status of the request to deposit version 2");
  await getDepositStatus(referenceV2, true);

  console.log("POST Create a version 1 refund request");
  refundOptions.referenceIdToRefund = referenceV1;
  await refundV1(refundReferenceV1, refundOptions, true);

  console.log("GET Fetch status of the request to refund version 1");
  await getRefundStatus(refundReferenceV1, true);

  console.log("POST Create a version 2 refund request");
  refundOptions.referenceIdToRefund = referenceV2;
  await refundV2(refundReferenceV2, refundOptions, true);

  console.log("GET Fetch status of the request to refund version 2");
  await getRefundStatus(refundReferenceV2, true);

  console.log("POST Create a request to transfer");
  await transfer(reference, transferOptions, true);

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
