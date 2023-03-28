/**
 * Request to get personal information of the account holder
 */
class GetBasicUserinfo {
    /**
     * @param {string} msisdn - The MSISDN of the user
     * 
     * 
     */
    constructor(msisdn) {
      this.url = `/disbursement/v1_0/accountholder/msisdn/${msisdn}/basicuserinfo`;
      this.method = 'get';
      this.headers = {};
    }
  }
  
  module.exports = {
    GetBasicUserinfo,
  };
  