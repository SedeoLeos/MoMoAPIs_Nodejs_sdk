/**
 * An OAuth2 client credentials grant access token request
 */
class GetBasicUserinfo {
    /**
     * @param {string} msisdn - The MSISDN of the user
     * 
     * 
     */
    constructor(msisdn) {
      this.url = `collection/v1_0/accountholder/msisdn/${msisdn}/basicuserinfo`;
      this.method = 'get';
      this.headers = {};
    }
  }
  
  module.exports = {
    GetBasicUserinfo,
  };
  