const axios = require('axios');

class MMSandbox {
  constructor(environment) {
    this.environment = environment;
  }

  async function1() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function2() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/comments/1');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function3() {
    try {
      const response = await axios.get(`https://api.example.com/${this.var1}/${this.var2}/${this.var3}/${this.var4}`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
}

const myInstance = new MyClass('value1', 'value2', 'value3', 'value4');
myInstance.function1(); // calls an external API to get a post with ID 1
myInstance.function2(); // calls an external API to get a comment with ID 1
myInstance.function3(); // calls an external API using the values of var1, var2, var3, and var4 as parameters
