const { getBasicUserinfo } = require("./getBasicUserinfo");
const { createAccessToken } = require("./createAccessToken");
const { getAccountBalance } = require("./getAccountBalance");
const { getUserInfoWithConsent } = require("./getUserInfoWithConsent");
const {
  validateAccountHolderStatus,
} = require("./validateAccountHolderStatus");
const {
  requestToPayDeliveryNotification,
} = require("./requestToPayDeliveryNotification");
const { transfer, getTransferStatus } = require("./transfer");

module.exports = {
  transfer,
  getTransferStatus,
  getBasicUserinfo,
  createAccessToken,
  getAccountBalance,
  getUserInfoWithConsent,
  validateAccountHolderStatus,
  requestToPayDeliveryNotification,
};
