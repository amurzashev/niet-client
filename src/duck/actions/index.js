/* eslint-disable import/prefer-default-export */
import axios from 'axios';

let baseURL;

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3001/api/v1/';
}
if (process.env.NODE_ENV === 'production') {
  baseURL = 'https://api.niet.kz/v1/';
}

export const apiRequest = axios.create({
  baseURL,
  timeout: 30000,
});
