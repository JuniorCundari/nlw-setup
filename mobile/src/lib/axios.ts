import axios from 'axios';

export const api = axios.create({
  baseURL: `${process.env.NUMBER_IP}:3333`,
});
