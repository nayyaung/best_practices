import http from 'k6/http'
import { check, sleep } from 'k6'


export const options = {
    vus: 10,
    duration: '30s',
  };

export default function () {
  const data = { title: 'hello hell', detail: 'lorum ipsum?? whatever' }
  let res = http.post('http://host.docker.internal:3030/posts', data);

  check(res, { 'success': (r) => r.status === 200 });

  sleep(0.3)
}

//docker run --add-host=host.docker.internal:host-gateway --rm -i -e K6_PROMETHEUS_RW_SERVER_URL=http://host.docker.internal:9090/api/v1/write grafana/k6 run - <perfTest.js
// cat perfTest.js | docker run --add-host host.docker.internal=host-gateway --rm -i  -e K6_PROMETHEUS_RW_SERVER_URL=http://host.docker.internal:9090/api/v1/write -e K6_PROMETHEUS_RW_TREND_AS_NATIVE_HISTOGRAM=true grafana/k6 run -o experimental-prometheus-rw -