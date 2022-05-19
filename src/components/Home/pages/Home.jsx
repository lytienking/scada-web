import * as React from 'react';
import scadaApi from '../../../api/scadaApi';
import './Home.scss';

const Home = () => {
  const clickMe = async () => {
    let params = {
      name: 'Johnny',
      value: 'test6',
      datetime: '2022-05-10',
    };
    const res = await scadaApi.update(params);
    console.log(res);
  };

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
      <div className="container bootstrap snippets bootdeys scada">
        <div className="row">
          <div className="form-style-2">
            <div className="form-style-2-heading">Bảng điều khiển</div>
            <form action="" method="post">
              <label htmlFor="field1">
                <span>
                  Chiều cao <span className="required">*</span>
                </span>
                <input type="text" placeholder='Nhập (0-100)' className="input-field" name="field1" />
              </label>
              <label htmlFor="field4">
                <span>
                  Màu lá <span className="required">*</span>
                </span>
                <select name="field4" className="select-field">
                  <option value="General Question">Xanh</option>
                  <option value="Advertise">Héo</option>
                  <option value="Partnership">Vàng</option>
                </select>
              </label>
              <label htmlFor="field2">
                <span>
                  Nhiệt độ <span className="required">*</span>
                </span>
                <input type="text" placeholder='Nhập (20-80)' className="input-field" name="field2" />
              </label>
              <label htmlFor="field2">
                <span>
                  Độ ẩm <span className="required">*</span>
                </span>
                <input type="text" placeholder='Nhập (0-100)' className="input-field" name="field2" />
              </label>
              <label htmlFor="field2">
                <span>
                  Bơm DC <span className="required">*</span>
                </span>
                <input type="text" placeholder='Nhập (1-60)' className="input-field" name="field2" />
              </label>
            </form>
            <button  onClick={clickMe}> Xác nhận</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
