import axios from 'axios';

const SMS_API = axios.create({
    baseURL: 'https://sms-api-git-main-neemiasvieira.vercel.app/',
    timeout: 10000,
  });

export default SMS_API;