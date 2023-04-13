/**
 * Request to send additional Notification to an End User
 */
class RequestToPayDeliveryNotification {
  /**
   * @param {uuid} referenceId - The unique reference ID of the payment request
   * @param {string} notificationMessage - The message to send in the delivery notification | Max length 160
   * @param {string} language - An ISO 639-1 or ISO 639-3 language code | Optional
   */
  constructor(referenceId, notificationMessage, language) {
    this.url = `/disbursement/v1_0/requesttopay/${referenceId}/deliverynotification`;
    this.method = 'post';
    this.data = {
      'notificationMessage': notificationMessage,
    };
    this.headers = {
      'Content-Type': 'application/json',
      'notificationMessage': notificationMessage,
    };
    if (language !== undefined) {
      this.headers.Language = language;
    }
  }
}

module.exports = {
  RequestToPayDeliveryNotification,
};
