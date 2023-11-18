import axios from 'axios';
import {CONFIG} from "../utils/constants/constants.ts";


export const httpClient = axios.create({
    baseURL: CONFIG.baseUrl,
    withCredentials: false,
});
httpClient.defaults.headers.common.Accept = 'application/json';
httpClient.defaults.headers.post['Content-Type'] = 'application/json';
httpClient.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
