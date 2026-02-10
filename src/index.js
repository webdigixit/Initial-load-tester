const { targetUrl, totalRequests } = require('./config');
const runLoadTest = require('./runner');

(async () => {
    console.log('Start load test...');
    console.log(`target: ${targetUrl}`);
    console.log(`requests: ${totalRequests}`);

    const stats = await runLoadTest(targetUrl, totalRequests);

    console.log('Results');
    console.log(stats);
})();
