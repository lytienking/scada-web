import React, { useState, useEffect } from 'react';
import ScadaApi from '../../../api/scadaApi';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
// import _ from 'lodash';
import './Value.scss';

const Value = () => {
  const [inverter, setInverter] = useState([]);
  const [system, setSystem] = useState([]);

  const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';

  const exportToCSV = (csvInverter, csvSystem, fileName) => {
    const ws = XLSX.utils.json_to_sheet(csvInverter);
    const ws2 = XLSX.utils.json_to_sheet(csvSystem);
    const wb = { Sheets: { data: ws, data2: ws2 }, SheetNames: ['data', 'data2'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };
  useEffect(() => {
    const fetchData = async () => {
      const data1 = await ScadaApi.getInverter();
      const data2 = await ScadaApi.getSystem();
      // let systemTop20 = _.sortBy(data2, [
      //   function (o) {
      //     return o.createdAt;
      //   },
      // ]).slice(data2.length - 2, data2.length - 1);
      // let inverter = [];
      // data1.forEach((element) => {
      //   const inverterElement = {
      //     F1: element.F1,
      //     V1: element.V1,
      //     I1: element.I1,
      //     F2: element.F2,
      //     V2: element.V2,
      //     I2: element.I2,
      //     createdAt: new Date(parseInt(element.createdAt) * 1000).toLocaleDateString(),
      //   };
      //   inverter.push(inverterElement);
      // });

      setInverter(data1);
      setSystem(data2);
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
    <div className="value">
      <h1 className="title">Bảng giá trị</h1>
      <button className="btn-export" onClick={(e) => exportToCSV(inverter, system, 'data')}>
        Export Excel
      </button>
      <div className="table-value">
        <div className="table-left">
          <table border="1">
            <caption>Biến tần</caption>
            <thead>
              <tr>
                <th>F1</th>
                <th>V1</th>
                <th>I1</th>
                <th>F2</th>
                <th>V2</th>
                <th>I2</th>
              </tr>
            </thead>
            <tbody>
              {inverter.map((item, index) => (
                <tr key={`${item.createdAt}-${index}`}>
                  <td>{item.F1}</td>
                  <td>{item.V1}</td>
                  <td>{item.I1}</td>
                  <td>{item.F2}</td>
                  <td>{item.V2}</td>
                  <td>{item.I2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="table-right">
          <table border="1">
            <caption>Hệ thống</caption>
            <thead>
              <tr>
                <th>Màu xanh</th>
                <th>Màu vàng</th>
                <th>Màu đỏ</th>
                <th>Chiều cao</th>
                <th>Độ ẩm</th>
                <th>Nhiệt độ</th>
              </tr>
            </thead>
            <tbody>
              {system.map((item, index) => (
                <tr key={`${item.createdAt}-${index}`}>
                  <td>{item.mauxanh}</td>
                  <td>{item.mauvang}</td>
                  <td>{item.maudo}</td>
                  <td>{item.chieucao}</td>
                  <td>{item.doam}</td>
                  <td>{item.nhietdo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Value;
