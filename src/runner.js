const fs = require('fs');
const path = require('path');
const sendRequest = require('./reqester');
const calculateStats = require('./stats');

async function runLoadTest(url, count) {
    const tasks = [];

    for (let i = 0; i < count; i++) {
        tasks.push(sendRequest(url));
    }

    const results = await Promise.all(tasks);
    const stats = calculateStats(results);

    const outputPath = path.join(__dirname, '..', 'results', 'last-run.json');
    fs.writeFileSync(outputPath, JSON.stringify(stats, null, 2));

    return stats;
}

module.exports = runLoadTest;