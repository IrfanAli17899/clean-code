import axios from 'axios';
import { API_BASE_URL } from '@/config';

export const apiAxios = axios.create({
  baseURL: API_BASE_URL, // Centralized base URL from environment/configs
});