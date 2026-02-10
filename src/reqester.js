const axios = require('axios');
const { timeout } = require('./config');

async function sendRequest(url) {
    const start = Date.now();
    try {
        await axios.get(url, { timeout });
        return {
            success: true,
            time: Date.now() - start
        };
    } catch (err) {
        return {
            success: false,
            time: Date.now() - start
        };
    }
}

module.exports = sendRequest;
