function calculateStats(results) {
    const success = results.filter(r => r.success);
    const failed = results.filter(r => !r.success);

    const times = success.map(r => r.time);

    return {
        total: results.length,
        success: success.length,
        failed: failed.length,
        avgTime: times.length
            ? times.reduce((a, b) => a + b, 0) / times.length
            : 0,
        minTime: times.length ? Math.min(...times) : 0,
        maxTime: times.length ? Math.max(...times) : 0,
    };
}

module.exports = calculateStats;