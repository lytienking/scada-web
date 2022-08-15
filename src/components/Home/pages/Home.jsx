import * as React from 'react';
// import scadaApi from '../../../api/scadaApi';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './Home.scss';

const Home = () => {
  // const clickMe = async () => {
  //   let params = {
  //     name: 'Johnny',
  //     value: 'test6',
  //     datetime: '2022-05-10',
  //   };
  //   const res = await scadaApi.update(params);
  //   console.log(res);
  // };

  return (
    <div>
      <h1 className="section-title">
        SC<span>A</span>D<span>A</span>
      </h1>
      <Box sx={{ width: '70%' }}>
        <Grid  container>
          <Grid item xs>
            <div className="card-big-shadow">
              <div className="card card-just-text" data-background="color" data-color="yellow" data-radius="none">
                <div className="content">
                  <h3 className="title-card">Nhiệt độ</h3>
                  <div className="content-card-tree">
                    <p className="temp">30°C</p>
                  </div>
                  <div className="content-card-tree">
                    <p className="temp"> Cảnh báo mức cao</p>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid className='tree-info' item xs={6}>
            <table border="1">
              <caption>TRẠNG THÁI CÂY TRỒNG</caption>
              <tr>
                <th className='column1'>Màu xanh (%)</th>
                <th className='column2'>52</th>
              </tr>
              <tr>
                <th className='column1'>Màu vàng (%)</th>
                <th className='column2'>52</th>
              </tr>
              <tr>
                <th className='column1'>Màu đỏ (%)</th>
                <th className='column2'>52</th>
              </tr>
              <tr>
                <th className='column1'>Chiều cao (mm)</th>
                <th className='column2'>52</th>
              </tr>
            </table>
          </Grid>
          <Grid item xs>
            <div className="card-big-shadow">
              <div className="card card-just-text" data-background="color" data-color="blue" data-radius="none">
                <div className="content">
                  <h3 className="title-card">Độ ẩm</h3>
                  <div className="content-card-tree">
                    <p className="humidity">78%</p>
                  </div>
                  <div className="content-card-tree">
                    <p className="humidity"> Cảnh báo mức cao</p>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
