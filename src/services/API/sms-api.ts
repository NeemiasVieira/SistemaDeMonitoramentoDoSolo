import axios from 'axios';

const SMS_API = axios.create({
    // baseURL: 'https://sms-api-oe8t.onrender.com/',
    baseURL: "http://3.95.189.148:3333/graphql",
    // baseURL: 'https://sms-api-git-main-neemiasvieira.vercel.app/',
    // baseURL: 'http://localhost:3333/',
    timeout: 90000,
  });

export default SMS_API;