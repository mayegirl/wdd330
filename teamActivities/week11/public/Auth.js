import { requestJson } from './utilities.js';

export default class Auth {
  // constructor() {
  //   this.jsonWebToken = '';
  //   this.user = {};
  // }

  async login(callback = null) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const credentials = { email: email, password: password };
    // this.jsonWebToken =
    await requestJson('login', {method: 'post', body: JSON.stringify(credentials)});
    if (callback) callback();
  }
}