import axios from 'axios';

export {};

const api = axios.create({
  baseURL: 'http://localhost:8080', // Substitua pela URL do seu servidor backend
});

export default api;
