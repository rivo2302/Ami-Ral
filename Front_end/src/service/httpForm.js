import { authHeader } from '../helper/auth-header';
import baseURL from './baseUrl'
const axios = require('axios');


const httpForm = axios.create({
    baseURL: baseURL + '/api',
    headers: { 
        ...authHeader(),
        'content-Type':'multipart/form-data'
    },
});

export default httpForm