import React, { useState, useEffect } from 'react';
import ScadaApi from '../../../api/scadaApi';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import _ from 'lodash';
import './Home.scss';

const Home = () => {
  const [inverter, setInverter] = useState({});
  const [system, setSystem] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const data1 = await ScadaApi.getInverter();
      const data2 = await ScadaApi.getSystem();
      const inverter = _.maxBy(data1, 'createdAt');
      const system = _.maxBy(data2, 'createdAt');
      setInverter(inverter);
      setSystem(system);
    };
    fetchData();
    let rotationInterval = setInterval(() => {
      fetchData();
    }, 20000);
    return () => {
      clearInterval(rotationInterval);
    };
  }, []);
  return (
    <div>
      <h1 className="section-title">
        SC<span>A</span>D<span>A</span>
      </h1>
      <Box>
        <Grid style={{paddingLeft:'100px'}} container>
          <Grid item xs={4}>
            <div className="card-big-shadow">
              <div className="card card-just-text" data-background="color" data-color="yellow" data-radius="none">
                <div className="content">
                  <h3 className="title-card">Nhiệt độ</h3>
                  <div className="content-card-tree">
                    <p className="temp">{system.nhietdo / 100}°C</p>
                  </div>
                  <div className="content-card-tree">
                    {system.nhietdo < 2500 && <p className="temp-alert">Cảnh báo mức thấp</p>}
                    {system.nhietdo > 5000 && <p className="temp-alert">Cảnh báo mức cao</p>}
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid className="tree-info" item xs={4}>
            <table border="1">
              <caption className="cap-table">TRẠNG THÁI CÂY TRỒNG</caption>
              <tbody>
                <tr>
                  <th className="column1">Màu xanh (%)</th>
                  <th className="column2">{system.mauxanh}</th>
                </tr>
                <tr>
                  <th className="column1">Màu vàng (%)</th>
                  <th className="column2">{system.mauvang}</th>
                </tr>
                <tr>
                  <th className="column1">Màu đỏ (%)</th>
                  <th className="column2">{system.maudo}</th>
                </tr>
                <tr>
                  <th className="column1">Chiều cao (mm)</th>
                  <th className="column2">{system.chieucao}</th>
                </tr>
              </tbody>
            </table>
          </Grid>
          <Grid style={{paddingLeft:'70px'}} item xs={4}>
            <div className="card-big-shadow">
              <div className="card card-just-text" data-background="color" data-color="blue" data-radius="none">
                <div className="content">
                  <h3 className="title-card">Độ ẩm</h3>
                  <div className="content-card-tree">
                    <p className="humidity">{system.doam / 100}%</p>
                  </div>
                  <div className="content-card-tree">
                    {system.doam < 4000 && <p className="humidity-alert">Cảnh báo mức thấp</p>}
                    {system.doam > 7000 && <p className="humidity-alert">Cảnh báo mức cao</p>}
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ width: '100%', marginTop: '100px' }}>
        <Grid container>
          <Grid className="status-info" item xs={4}>
            <table border="1">
              <caption className="cap-table">BIẾN TẦN NHIỆT ĐỘ</caption>
              <tbody>
                <tr>
                  <th className="column1">Tần số thực</th>
                  <th className="column2">{inverter.F1}</th>
                </tr>
                <tr>
                  <th className="column1">DC BUS</th>
                  <th className="column2">{inverter.V1}</th>
                </tr>
                <tr>
                  <th className="column1">Dòng điện</th>
                  <th className="column2">{inverter.I1}</th>
                </tr>
              </tbody>
            </table>
          </Grid>
          <Grid className="status-info" item xs={4}>
            <table border="1">
              <caption className="cap-table">TRẠNG THÁI KẾT NỐI</caption>
              <tbody>
                <tr>
                  <th className="column1">Rasp - Rasp</th>
                  <th className="column2">52</th>
                </tr>
                <tr>
                  <th className="column1">Rasp - Arduino</th>
                  <th className="column2">52</th>
                </tr>
                <tr>
                  <th className="column1">Rasp - PLC</th>
                  <th className="column2">52</th>
                </tr>
              </tbody>
            </table>
          </Grid>
          <Grid className="status-info" item xs={4}>
            <table border="1">
              <caption className="cap-table">BIẾN TẦN ĐỘ ẨM</caption>
              <tbody>
                <tr>
                  <th className="column1">Tần số thực</th>
                  <th className="column2">{inverter.F2}</th>
                </tr>
                <tr>
                  <th className="column1">DC BUS</th>
                  <th className="column2">{inverter.F2}</th>
                </tr>
                <tr>
                  <th className="column1">Dòng điện</th>
                  <th className="column2">{inverter.F2}</th>
                </tr>
              </tbody>
            </table>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
