/* eslint-disable max-statements */
/* eslint-disable no-magic-numbers */

/**
 * An OAuth2 access token
 */
// eslint-disable-next-line padded-blocks
class AccessToken {

  /**
   * @param {object} options - The access token object as it was granted by the token endpoint
   * @param {string} options.access_token - The access token
   * @param {string} options.token_type - The token type
   * @param {number} options.expires_in - The duration of the token in milliseconds
   * @param {string} options.refresh_token - The refresh token if any to refresh the current token
   * @param {string} options.product_type - The type of product accessed using the token
   */
  constructor(options) {
    this._accessToken = options.access_token;
    this._tokenType = options.token_type ? options.token_type : 'Bearer';
    this._product_type = options.product_type;
    this._expiresIn = options.expires_in;
    this._dateCreated = Date.now();
  }

  /**
   * Get the expiration status of the token
   * @return {boolean} - True if the token is expired otherwise false
   */
  isExpired() {
    return Date.now() > this._dateCreated + this._expiresIn;
  }

  /**
   * Get the value of an Authorization header with the current access token
   * @return {string} - The Authorization header value
   */
  authorizationString() {
    return `Bearer ${this._accessToken}`;
  }
}

module.exports = {
  AccessToken,
};
