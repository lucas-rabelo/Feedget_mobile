import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://feedgetserver-production-866b.up.railway.app/'
})