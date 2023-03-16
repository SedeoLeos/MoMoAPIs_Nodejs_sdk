/**
 * Basic user info API
 * 
 */
class GetBasicUserinfo {
    /**
     * @param {string} msisdn - The MSISDN of the user
     * 
     */
    constructor(msisdn) {
      this.url = `/remittance/v1_0/accountholder/msisdn/${msisdn}/basicuserinfo`;
      this.method = 'get';
      this.headers = {};
    }
  }
  
  module.exports = {
    GetBasicUserinfo,
  };
  