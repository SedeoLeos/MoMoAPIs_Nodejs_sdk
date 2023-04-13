# MTN MoMo API - SDK for NodeJS

This SDK provides for an easy way to connect to [MTN MoMo API](https://momodeveloper.mtn.com/api-documentation).

Please refer to the following documentation for installation instructions and usage information.

- [API Documentation](https://momodeveloper.mtn.com/api-documentation)
- [NodeJS SDK Documentation](docs/)
- [NodeJS SDK Sample Codes](samples/src/)

## Index

This document contains the following sections:

- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Setting Up](#setting-up)
- [Use Cases](#use-cases)
  - [Sandbox User Provisioning](#sandbox)
  - [Collection](#collection)
  - [Disbursement](#disbursement)
  - [Remittance](#remittance)
- [Testing](#testing)
- [Samples](#samples)

## Requirements

- Node.js 16.19.1 LTS or higher

## Getting Started

Create a Node.js project in your directory, then run the following command to install the MTN MoMo Api Node.js SDK.

```javascript
npm install momoapi-nodejs-sdk
```

## Setting Up

After you install the SDK, make it available to your app and configure your environment.
Configuration details include either sandbox for testing or other for production as env type, and your api key, subscription key, reference id, security option and callback url for your app.

In the directory where you installed the SDK, include this code to make the SDK available and configure your environment with your application credentials for sandbox and live environments in the Developer Dashboard.

```javascript
/**
 * MoMoAPI Node.js SDK dependency
 */
const momoApi = require("momoapi-nodejs-sdk");

/**
 * Set up and return MoMoAPI Node.js SDK environment options.
 */
const options = {
  product_type: "<PRODUCT_TYPE>", // collection, disbursement or remittance
  api_key: process.env.API_KEY, // The API key for the particular product
  subscription_key: process.env.SUBSCRIPTION_KEY, // The first subscription key for the particular product
  subscription_key_2: process.env.SUBSCRIPTION_KEY_2, // The second subscription key for the particular product
  security: process.env.SECURITY_OPTION, // DEVELOPMENT_LEVEL, STANDARD_LEVEL, ENHANCED_LEVEL,
};

let environment = new momoApi.core.Environment(
    process.env.X_REFERENCE_ID, // Reference ID used for obtaining API_KEY for the particular product
    process.env.ENV_TYPE, 
    process.env.CALLBACK_URL,
    options
  );

/**
 * Returns MoMoAPI Node.js SDK "Collection" instance with environment if your <PRODUCT_TYPE> is "collection".
 * Use this instance to invoke MoMoAPI collection APIs
 */
let collection = new momoApi.Collection(environment);

/**
 * Returns MoMoAPI Node.js SDK "Disbursement" instance with environment if your <PRODUCT_TYPE> is "disbursement".
 * Use this instance to invoke MoMoAPI disbursement APIs
 */

let disbursement = new momoApi.Disbursement(environment);

/**
 * Returns MoMoAPI Node.js SDK "Remittance" instance with environment if your <PRODUCT_TYPE> is "remittance".
 * Use this instance to invoke MoMoAPI remittance APIs
 */

let remittance = new momoApi.Remittance(environment);

```

## Use Cases

- [Sandbox User Provisioning](#sandbox)
- [Collection](#collection)
- [Disbursement](#disbursement)
- [Remittance](#remittance)

### Sandbox User Provisioning

<table>
<thead>
  <tr>
    <th>Scenarios</th>
    <th>API</th>
    <th>Function</th>
    <th>Parameters</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="3">Sandbox User Provisioning</td>
    <td><a href="docs/sandboxUserProvisioning/createUser.Readme.md">Creating an API user</a></td>
    <td>createUser</td>
    <td>CallbackHost callbackHost</td>
  </tr>
  <tr>
    <td><a href="docs/sandboxUserProvisioning/getUserDetails.Readme.md">Get user details with referenceId</a></td>
    <td>getUserDetails</td>
    <td>String referenceId</td>
  </tr>
  <tr>
    <td><a href="docs/sandboxUserProvisioning/createApiKey.Readme.md">Create ApiKey for a user</a></td>
    <td>createApiKey</td>
    <td>String referenceId</td>
  </tr>
</tbody>
</table>

### Collection

<table>
<thead>
  <tr>
    <th>Scenarios</th>
    <th>API</th>
    <th>Function</th>
    <th>Parameters</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="3">Request To Pay</td>
    <td><a href="docs/collection/requestToPay.Readme.md">Request To Pay</a></td>
    <td>requestToPay</td>
    <td>RequestPay requestPay</td>
  </tr>
  <tr>
    <td><a href="docs/collection/requestToPayTransactionStatus.Readme.md">Request To Pay Transaction Status</a></td>
    <td>requestToPayTransactionStatus</td>
    <td>String referenceId</td>
  </tr>
  <tr>
    <td><a href="docs/collection/requestToPayDeliveryNotification.Readme.md">Request To Pay Delivery Notification</a></td>
    <td>requestToPayDeliveryNotification</td>
    <td>String referenceId, DeliveryNotification deliveryNotification, (optional)String deliveryNotificationHeader</td>
  </tr>
  <tr>
    <td rowspan="3">Request To Withdraw</td>
    <td><a href="docs/collection/requestToWithdrawV1.Readme.md">Request To Withdraw-V1</a></td>
    <td>requestToWithdrawV1</td>
    <td>Withdraw withdraw</td>
  </tr>
  <tr>
    <td><a href="docs/collection/requestToWithdrawV2.Readme.md">Request To Withdraw-V2</a></td>
    <td>requestToWithdrawV2</td>
    <td>Withdraw withdraw</td>
  </tr>
  <tr>
    <td><a href="docs/collection/requestToWithdrawTransactionStatus.Readme.md">Request To Withdraw Transaction Status</a></td>
    <td>requestToWithdrawTransactionStatus</td>
    <td>String referenceId</td>
  </tr>
  <tr>
    <td>Get UserInfo With Consent</td>
    <td><a href="docs/collection/getUserInfoWithConsent.Readme.md">Get UserInfo With Consent</a></td>
    <td>getUserInfoWithConsent</td>
    <td>AccountHolder accountHolder, String scope, AccessType accessType</td>
  </tr>
  <tr>
    <td>Get Basic Userinfo</td>
    <td><a href="docs/collection/getBasicUserinfo.Readme.md">Get Basic Userinfo</a></td>
    <td>getBasicUserinfo</td>
    <td>String msisdn</td>
  </tr>
  <tr>
    <td>Validate Account Holder Status</td>
    <td><a href="docs/collection/validateAccountHolderStatus.Readme.md">Validate Account Holder Status</a></td>
    <td>validateAccountHolderStatus</td>
    <td>AccountHolder accountHolder</td>
  </tr>
  <tr>
    <td>Get Account Balance</td>
    <td><a href="docs/collection/getAccountBalance.Readme.md">Get Account Balance</a></td>
    <td>getAccountBalance</td>
    <td>NA</td>
  </tr>
  <tr>
    <td>Get Account Balance In Specific Currency</td>
    <td><a href="docs/collection/getAccountBalanceInSpecificCurrency.Readme.md">Get Account Balance In Specific Currency</a></td>
    <td>getAccountBalanceInSpecificCurrency</td>
    <td>String currency</td>
  </tr>
</tbody>
</table>

### Disbursement

<table>
<thead>
  <tr>
    <th>Scenarios</th>
    <th>API</th>
    <th>Function</th>
    <th>Parameters</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="2">Transfer</td>
    <td><a href="docs/disbursement/transfer.Readme.md">Transfer</a></td>
    <td>transfer</td>
    <td>Transfer transfer</td>
  </tr>
  <tr>
    <td><a href="docs/disbursement/getTransferStatus.Readme.md">Get Transfer Status</a></td>
    <td>getTransferStatus</td>
    <td>String referenceId</td>
  </tr>
  <tr>
    <td>Request To Pay Delivery Notification</td>
    <td><a href="docs/disbursement/requestToPayDeliveryNotification.Readme.md">Request To Pay Delivery Notification</a></td>
    <td>requestToPayDeliveryNotification</td>
    <td>String referenceId, DeliveryNotification deliveryNotification, (optional)String deliveryNotificationHeader</td>
  </tr>
  <tr>
    <td rowspan="3">Deposit</td>
    <td><a href="docs/disbursement/depositV1.Readme.md">Deposit-V1</a></td>
    <td>depositV1</td>
    <td>Deposit deposit</td>
  </tr>
  <tr>
    <td><a href="docs/disbursement/depositV2.Readme.md">Deposit-V2</a></td>
    <td>depositV2</td>
    <td>Deposit deposit</td>
  </tr>
  <tr>
    <td><a href="docs/disbursement/getDepositStatus.Readme.md">Get Deposit Status</a></td>
    <td>getDepositStatus</td>
    <td>String referenceId</td>
  </tr>
  <tr>
    <td rowspan="3">Refund</td>
    <td><a href="docs/disbursement/refundV1.Readme.md">Refund-V1</a></td>
    <td>refundV1</td>
    <td>Refund refund</td>
  </tr>
  <tr>
    <td><a href="docs/disbursement/refundV2.Readme.md">Refund-V2</a></td>
    <td>refundV2</td>
    <td>Refund refund</td>
  </tr>
  <tr>
    <td><a href="docs/disbursement/getRefundStatus.Readme.md">Get Refund Status</a></td>
    <td>getRefundStatus</td>
    <td>String referenceId</td>
  </tr>
  <tr>
    <td>Get UserInfo With Consent</td>
    <td><a href="docs/disbursement/getUserInfoWithConsent.Readme.md">Get UserInfo With Consent</a></td>
    <td>getUserInfoWithConsent</td>
    <td>AccountHolder accountHolder, String scope, AccessType accessType</td>
  </tr>
  <tr>
    <td>Get Basic Userinfo</td>
    <td><a href="docs/disbursement/getBasicUserinfo.Readme.md">Get Basic Userinfo</a></td>
    <td>getBasicUserinfo</td>
    <td>String msisdn</td>
  </tr>
  <tr>
    <td>Validate Account Holder Status</td>
    <td><a href="docs/disbursement/validateAccountHolderStatus.Readme.md">Validate Account Holder Status</a></td>
    <td>validateAccountHolderStatus</td>
    <td>AccountHolder accountHolder</td>
  </tr>
  <tr>
    <td>Get Account Balance</td>
    <td><a href="docs/disbursement/getAccountBalance.Readme.md">Get Account Balance</a></td>
    <td>getAccountBalance</td>
    <td>NA</td>
  </tr>
  <tr>
    <td>Get Account Balance In Specific Currency</td>
    <td><a href="docs/disbursement/getAccountBalanceInSpecificCurrency.Readme.md">Get Account Balance In Specific Currency</a></td>
    <td>getAccountBalanceInSpecificCurrency</td>
    <td>String currency</td>
  </tr>
</tbody>
</table>

### Remittance

<table>
<thead>
  <tr>
    <th>Scenarios</th>
    <th>API</th>
    <th>Function</th>
    <th>Parameters</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="2">Transfer</td>
    <td><a href="docs/remittance/transfer.Readme.md">Transfer</a></td>
    <td>transfer</td>
    <td>Transfer transfer</td>
  </tr>
  <tr>
    <td><a href="docs/remittance/getTransferStatus.Readme.md">Get Transfer Status</a></td>
    <td>getTransferStatus</td>
    <td>String referenceId</td>
  </tr>
  <tr>
    <td>Request To Pay Delivery Notification</td>
    <td><a href="docs/remittance/requestToPayDeliveryNotification.Readme.md">Request To Pay Delivery Notification</a></td>
    <td>requestToPayDeliveryNotification</td>
    <td>String referenceId, DeliveryNotification deliveryNotification, (optional)String deliveryNotificationHeader</td>
  </tr>
  <tr>
    <td>Get UserInfo With Consent</td>
    <td><a href="docs/remittance/getUserInfoWithConsent.Readme.md">Get UserInfo With Consent</a></td>
    <td>getUserInfoWithConsent</td>
    <td>AccountHolder accountHolder, String scope, AccessType accessType</td>
  </tr>
  <tr>
    <td>Get Basic Userinfo</td>
    <td><a href="docs/remittance/getBasicUserinfo.Readme.md">Get Basic Userinfo</a></td>
    <td>getBasicUserinfo</td>
    <td>String msisdn</td>
  </tr>
  <tr>
    <td>Validate Account Holder Status</td>
    <td><a href="docs/remittance/validateAccountHolderStatus.Readme.md">Validate Account Holder Status</a></td>
    <td>validateAccountHolderStatus</td>
    <td>AccountHolder accountHolder</td>
  </tr>
  <tr>
    <td>Get Account Balance</td>
    <td><a href="docs/remittance/getAccountBalance.Readme.md">Get Account Balance</a></td>
    <td>getAccountBalance</td>
    <td>NA</td>
  </tr>
</tbody>
</table>

## Testing


### Unit tests


## Samples

