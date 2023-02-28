import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 1000,
  responseType: 'json', //default 
  responseEncoding: 'utf8', // default
  headers: { 'X-Custom-Header': 'my axios' }
});

export default instance;

