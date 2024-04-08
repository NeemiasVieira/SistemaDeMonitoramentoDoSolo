import axios from 'axios';

const SMS_API = axios.create({
    // baseURL: 'https://sms-api-oe8t.onrender.com/', render
    // baseURL: "http://3.95.189.148:3333/graphql", aws 
    baseURL: "http://172.212.98.90:3333/graphql", 
    // azure ˆ
    // baseURL: 'https://sms-api-git-main-neemiasvieira.vercel.app/', vercel
    // baseURL: 'http://localhost:3333/graphql', localhost
    timeout: 90000,
  });

export default SMS_API;