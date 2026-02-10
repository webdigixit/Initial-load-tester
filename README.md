# Load Taster 🚀

A high-performance HTTP load testing tool that benchmarks your API endpoints under concurrent load. Written in Node.js with parallel request handling and comprehensive performance analytics.

## Features

✅ **Concurrent Load Testing** — Send thousands of HTTP requests in parallel  
✅ **Real-Time Analytics** — Success rate, failure tracking, response time metrics  
✅ **Performance Insights** — Min/max/average response times under load  
✅ **Timeout Detection** — Identify timeout errors and failed requests  
✅ **JSON Export** — Results automatically saved for analysis  
✅ **Configurable** — Easy setup for different endpoints and load levels  

## Installation

### Prerequisites
- Node.js v14+ 
- npm

### Setup

```bash
# Clone the repository
git clone https://github.com/webdigixit/Initial-load-tester.git
cd load-taster

# Install dependencies
npm install
```

## Quick Start

```bash
node index.js
```

**Output:**
```
Start load test...
target: https://your-api.com
requests: 1000
Results
{
  "total": 1000,
  "success": 1000,
  "failed": 0,
  "avgTime": 1249.017,
  "minTime": 1119,
  "maxTime": 1443
}
```

Results automatically saved to `results/last-run.json`

## Configuration

Edit `src/config.js`:

```javascript
module.exports = {
    targetUrl: 'https://your-api.com/endpoint',  // API endpoint to test
    totalRequests: 1000,                          // Number of concurrent requests
    timeout: 10000                                 // Timeout per request (ms)
};
```

## Understanding Results

| Metric | Meaning |
|--------|---------|
| **total** | Total requests sent |
| **success** | Successful requests (HTTP 2xx) |
| **failed** | Failed/timed out requests |
| **avgTime** | Average response time (ms) |
| **minTime** | Fastest response (ms) |
| **maxTime** | Slowest response (ms) |

### Performance Interpretation

| Success Rate | Assessment | Action |
|--------------|-----------|--------|
| **95-100%** | ✅ Excellent | Server handles load well |
| **80-95%** | ⚠️ Acceptable | Monitor for bottlenecks |
| **<80%** | ❌ Poor | Server overloaded, optimize needed |

## Usage Examples

### Test a Lightweight Endpoint
```javascript
{
    targetUrl: 'https://api.github.com/users/github',
    totalRequests: 100,
    timeout: 5000
}
```

### Stress Test with 5,000 Requests
```javascript
{
    targetUrl: 'https://your-api.com/api/v1/data',
    totalRequests: 5000,
    timeout: 15000
}
```

### Local Development Testing
```javascript
{
    targetUrl: 'http://localhost:3000/api/endpoint',
    totalRequests: 200,
    timeout: 10000
}
```

## Performance Benchmarking

### Step 1: Find the Sweet Spot
Start small and gradually increase load:
- 100 requests → 500 → 1,000 → 2,500 → 5,000

### Step 2: Analyze Results
Track these metrics across test runs:
- Success rate (should stay >95%)
- Average response time (should remain stable)
- Max response time (should not spike)

### Step 3: Identify Limits
```
✅ 1,000 req → 100% success, 1.2s avg
⚠️ 5,000 req → 92% success, 4.5s avg
❌ 10,000 req → 62% success, 7.7s avg
```
**Conclusion:** Server handles up to ~2,500 requests safely.

## Results Storage

Load test results are saved automatically:
```
results/
└── last-run.json  // Latest test results
```

Access results:
```bash
cat results/last-run.json
```

## Project Structure

```
load-taster/
├── src/
│   ├── index.js        # Main entry point
│   ├── config.js       # Configuration
│   ├── runner.js       # Load test orchestrator
│   ├── reqester.js     # HTTP request handler
│   └── stats.js        # Statistics calculator
├── results/
│   └── last-run.json   # Test results
├── package.json
└── README.md
```

## Technologies Used

- **axios** — HTTP client for reliable requests
- **Node.js** — Async/await for parallel execution
- **JavaScript (ES6+)** — Modern JavaScript features

## Error Handling

The tool gracefully handles:
- ✅ Network timeouts
- ✅ Connection failures
- ✅ HTTP error responses
- ✅ Large concurrent loads

Failed requests are tracked in the `failed` counter without stopping the test.

## Best Practices

1. **Start Small** — Begin with 100–500 requests before scaling
2. **Monitor Stability** — Run multiple tests and compare results
3. **Realistic Load** — Match your expected user concurrency
4. **Timeout Settings** — Set timeout > expected response time
5. **Off-Peak Testing** — Test during low-traffic hours
6. **REST Between Tests** — Allow servers to cool down between runs

## Advanced Usage

### Test Multiple Endpoints
Create different configurations:
```bash
# Test 1: API endpoint
# results/last-run.json saved

# Edit config.js for second endpoint
node index.js

# Compare results manually
```

### Export for Analysis
Results are JSON-formatted and easy to parse:
```bash
# Import into Excel, Python, or analytics tool
cat results/last-run.json | jq
```

## Troubleshooting

**Q: All requests failing?**  
A: Check endpoint URL, network connection, and timeout value.

**Q: Response times spiking?**  
A: Server may be overloaded. Reduce `totalRequests` or check server health.

**Q: Memory issues with large loads?**  
A: Node.js handles parallel requests efficiently. Consider testing in batches.

## Contributing

Contributions welcome! Feel free to:
- 🐛 Report bugs
- 💡 Suggest features
- 📝 Improve documentation

## License

MIT License — Free to use and modify

## Author

**WebDigitXIT**  
Load Taster v1.0 - Professional API Load Testing Tool

---

**Made for performance engineers and DevOps teams.** 🎯
