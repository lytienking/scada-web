import React, { useState, useEffect } from 'react';
import ScadaApi from '../../../api/scadaApi';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import _ from 'lodash';
import './Value.scss';

const Value = () => {
  const [inverter, setInverter] = useState([]);
  const [system, setSystem] = useState([]);

  const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';

  const exportToCSV = (csvInverter, csvSystem, fileName) => {
    const ws = XLSX.utils.json_to_sheet(csvInverter);
    const ws2 = XLSX.utils.json_to_sheet(csvSystem);
    const wb = { Sheets: { bientan: ws, hethong: ws2 }, SheetNames: ['bientan', 'hethong'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };
  useEffect(() => {
    const fetchData = async () => {
      const data1 = await ScadaApi.getInverter();
      const data2 = await ScadaApi.getSystem();
      let inverterTop100 = _.sortBy(data1, [
        function (o) {
          return o.createdAt;
        },
      ]).slice(data1.length - 100, data1.length);
      let systemTop100 = _.sortBy(data2, [
        function (o) {
          return o.createdAt;
        },
      ]).slice(data2.length - 100, data2.length);
      let inverter = [];
      inverterTop100.forEach((element) => {
        const inverterElement = {
          F1: element.F1,
          V1: element.V1,
          I1: element.I1,
          F2: element.F2,
          V2: element.V2,
          I2: element.I2,
          thoigian: (new Date(parseInt(element.createdAt) * 1000)).toLocaleString(),
        };
        inverter.push(inverterElement);
      });
      let system = [];
      systemTop100.forEach((element) => {
        const systemElement = {
          mauxanh: element.mauxanh,
          mauvang: element.mauvang,
          maudo: element.maudo,
          chieucao: element.chieucao,
          doam: element.doam/100,
          nhietdo: element.nhietdo/100,
          thoigian: (new Date(parseInt(element.createdAt) * 1000)).toLocaleString(),
        };
        system.push(systemElement);
      });
      
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
    <div className="value">
      <h1 className="title">Bảng giá trị</h1>
      <button className="btn-export" onClick={(e) => exportToCSV(inverter, system, 'Hethong')}>
        Export Excel
      </button>
      <div className="table-value">
        <div className="table-left">
          <table>
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
                <tr key={`${item.thoigian}-${index}`}>
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
          <table>
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
                <tr key={`${item.thoigian}-${index}`}>
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
