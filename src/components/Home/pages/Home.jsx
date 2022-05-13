import * as React from 'react';
import './Home.scss';

const Home = () => {
  return (
    <div>
      <h1 className="section-title">
        SC<span>A</span>D<span>A</span>
      </h1>
      <div className="container bootstrap snippets bootdeys scada">
        <div className="row">
          <div className="col-md-4">
            <div className="card-big-shadow">
              <div className="card card-just-text" data-background="color" data-color="blue" data-radius="none">
                <div className="content">
                  <h3 className="title-card">Trạng thái của cây</h3>
                  <div className="content-card-tree">
                    <h4>Chiều cao:</h4>
                    <p className="description">168 cm</p>
                  </div>
                  <div className="content-card-tree">
                    <h4>Màu lá:</h4>
                    <p className="description">Xanh</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 ">
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
          </div>
          <div className="col-md-4">
            <div className="card-big-shadow">
              <div className="card card-just-text" data-background="color" data-color="brown" data-radius="none">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
