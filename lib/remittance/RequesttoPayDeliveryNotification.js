const { RemittanceObject } = require("./RemittanceObject");
/**
 *  Request to pay delivery notification API
 *
 */
class RequestToPayDeliveryNotification extends RemittanceObject {
  /**
   * @param {uuid} referenceId - The unique reference ID of the payment request
   * @param {string} notificationMessage - The message to send in the delivery notification | Max length 160
   * @param {string} language - An ISO 639-1 or ISO 639-3 language code
   */
  constructor(referenceId, notificationMessage, language) {
    super();
    this.url = `/remittance/v1_0/requesttopay/${referenceId}/deliverynotification`;
    this.method = "post";
    this.headers = {
      "Content-Type": "application/json",
      notificationMessage: notificationMessage,
    };
    if (language) {
      this.headers.Language = language;
    }
  }
}

module.exports = {
  RequestToPayDeliveryNotification,
};
