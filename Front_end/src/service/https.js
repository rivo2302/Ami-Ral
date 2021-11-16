
import baseURL from './baseUrl'
const axios = require('axios');

const https= axios.create({
    baseURL: baseURL,
    headers:{'Content-Type': 'application/json' },
});

export default https
