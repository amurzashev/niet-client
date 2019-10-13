/* eslint-disable import/prefer-default-export */
import axios from 'axios';

let baseURL;

if (process.env.NODE_ENV === 'development') {
  baseURL = 'localhost:3001/api/v1/';
} else {
  baseURL = 'https://api.niet.kz/v1';
}

export const apiRequest = axios.create({
  baseURL,
  timeout: 30000,
});
