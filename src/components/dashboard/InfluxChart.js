import React, {useState, useEffect} from 'react';
import {InfluxDB} from '@influxdata/influxdb-client';
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Area,
} from 'recharts';

const APItoken =
  'F_oWn6OdvzDl1tB-7XPZF5Jz8iXpD33YN9PcITyqQsF-qEHmQqKdcT6EB0viw7HiNMwW79UGNi_TItqVm2x7uQ==';
const OrgName = 'Oves';
const InfluxDBUrl = 'http://localhost:8086';

let query = `from(bucket: "Testing OVES")
|> range(start: v.timeRangeStart, stop: v.timeRangeStop)
|> filter(fn: (r) => r["_measurement"] == "airSensors")
|> filter(fn: (r) => r["_field"] == "humidity" or r["_field"] == "temperature")
|> filter(fn: (r) => r["sensor_id"] == "TLM0100" or r["sensor_id"] == "TLM0101")
|> aggregateWindow(every: v.windowPeriod, fn: mean, createEmpty: false)
|> yield(name: "mean")
`;

const InfluxChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let res = [];
    const influxQuery = async () => {
      // create InfluxDB client
      const queryApi = await new InfluxDB({url, token}).getQueryApi(org);
      //make query
      await queryApi.queryRows(query, {
        next(row, tableMeta) {
          const o = tableMeta.toObject(row);
          //push rows from query into an array object
          res.push(o);
        },
        complete() {
          let finalData = [];

          for (let i = 0; i < res.length; i++) {
            let point = {};
            point['humidity'] = res[i]['humidity'];
            point['temperature'] = res[i]['temperature'];

            point['name'] = res[i]['_time'];
            finalData.push(point);
          }
          setData(finalDa);
        },
        error(error) {
          console.log('query failed- ', error);
        },
      });
    };

    influxQuery();
  }, []);

  return (
    <div>
      <h1>InfluxChart</h1>
      <ComposedChart width={900} height={400} data={data}>
        <CartesianGrid />
        <Tooltip />
        <Line
          stroke='#0ff770'
          strokeWidth={1}
          dataKey='temperature'
          dot={false}
        />
        <Area stroke='#bf04b3' fill='#f235e6' dataKey='humidity' />
        <XAxis hide dataKey='name' />
        <YAxis />
      </ComposedChart>
    </div>
  );
};

export default InfluxChart;
