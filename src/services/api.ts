import axios from 'axios';

// axios.create([config])
export default axios.create({
  baseURL: 'https://6334585790a73d0fedecfc3f.mockapi.io',
  timeout: 1000,
});
