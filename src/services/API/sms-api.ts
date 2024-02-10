import axios from 'axios';

const SMS_API = axios.create({
    baseURL: 'https://sms-api-git-main-neemiasvieira.vercel.app/',
    // baseURL: 'http://localhost:3333/',
    timeout: 10000,
  });

export default SMS_API;