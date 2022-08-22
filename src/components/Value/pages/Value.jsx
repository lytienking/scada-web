import React from 'react';
import './Value.scss';

const Value = () => {
  const data1 = [
    {
      F1: 1,
      V1: 1,
      I1: 1,
      F2: 2,
      V2: 2,
      I2: 2,
      createdAt: '26-18-2021',
    },
    {
      F1: 1,
      V1: 1,
      I1: 1,
      F2: 2,
      V2: 2,
      I2: 2,
      createdAt: '25-18-2021',
    },
  ];
  const data2 = [
    {
      F1: 1,
      V1: 1,
      I1: 1,
      F2: 2,
      V2: 2,
      I2: 2,
      createdAt: '26-18-2021',
    },
    {
      F1: 1,
      V1: 1,
      I1: 1,
      F2: 2,
      V2: 2,
      I2: 2,
      createdAt: '25-18-2021',
    },
  ];
  return (
    <div className="value">
      <h1 className="title">Bảng giá trị</h1>
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
              {data1.map((item, index) => (
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
              {data2.map((item, index) => (
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
      </div>
    </div>
  );
};
export default Value;
