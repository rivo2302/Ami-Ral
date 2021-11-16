
import baseURL from './baseUrl'
const axios = require('axios');

const http= axios.create({
    baseURL: baseURL,
    headers:{'Content-Type': 'application/json' },
});

export default http
