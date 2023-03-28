const axios = require('axios');

class HttpClient {
  constructor(environment) {
    this.environment = environment;
    this._injectors = [];
    this.baseURL = this.environment.baseUrl;
    this.instance = axios.create({
      baseURL: this.baseURL,
    });
  }

  execute(req) {
    const injectorPromises = this._injectors.map((injector) => injector(req));
    return new Promise((resolve, reject) => Promise.all(injectorPromises).then(() => {
      this.instance.request(req)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          if (error.response) {
            reject(error.response);
          } else if (error.request) {
            reject(error.request);
          } else {
            reject(error.message);
          }
        });
    }));
  }

  addInjector(injector) {
    if (typeof injector !== 'function' || injector.length !== 1) {
      throw new Error('injector must be a function that takes one argument');
    }

    this._injectors.push(injector);
  }
}

module.exports = { HttpClient };
