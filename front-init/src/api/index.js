import axios from 'axios';

export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/todos',
  timeout: 2000,
});
