import axios from 'axios';

const FLASK_API = axios.create({
  baseURL: 'https://sms.devneemiasvieira.com/ia',
  // baseURL: 'http://127.0.0.1:8080',
  timeout: 10000,
});

export default FLASK_API;
