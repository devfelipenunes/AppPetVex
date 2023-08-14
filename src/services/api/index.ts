import axios from 'axios';
// import {getToken} from '../auth';

const api = axios.create({
  // baseURL: 'http://10.0.1.137/api',
  baseURL: 'http://localhost:3000',
});

// api.interceptors.request.use(async config => {
//   const token = await getToken();
//   if (token) config.headers.Authorization = `Bearer ${token}`;

//   return config;
// });

export default api;