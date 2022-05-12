import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://10.21.7.221:3333'
})