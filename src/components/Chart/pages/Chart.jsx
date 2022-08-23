import { useState, useEffect } from 'react';
import scadaApi from '../../../api/scadaApi';
import { Line } from 'react-chartjs-2';
import './Chart.scss';
const Chart = () => {
  const [benefitsActiveHumidity, setBenefitsActiveHumidity] = useState([]);
  const [benefitsActiveTemp, setBenefitsActiveTemp] = useState([]);
  const [labelDataTemp, setLabelDataTemp] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await scadaApi.getSystem();
      const tempArr = res.map((x) => x.nhietdo / 100);
      const tempLabelArr = res.map((x) => x.createdAt);
      const humidityArr = res.map((x) => x.doam / 100);
      let arr1 = [];
      tempLabelArr.forEach((element) => {
        var tempDate = new Date(parseInt(element)*1000);
        arr1.push(tempDate.toLocaleString());
      });
      setBenefitsActiveTemp(tempArr);
      setLabelDataTemp(arr1);
      setBenefitsActiveHumidity(humidityArr);
    };
    fetchData();
    let rotationInterval = setInterval(() => {
      fetchData();
    }, 20000);

    //Clean up can be done like this
    return () => {
      clearInterval(rotationInterval);
    };
  }, []);
  return (
    <div>
      <h1 className="title">Biểu đồ nhiệt độ và độ ẩm</h1>
      <div className="chart">
        <Line
          data={{
            labels: labelDataTemp,
            labelDataTemp,
            datasets: [
              {
                label: 'Nhiệt độ',
                data: benefitsActiveTemp,
                backgroundColor: ['rgb(255, 51, 0)'],
                borderColor: ['rgb(255, 0, 0)'],
                borderWidth: 1,
              },
              {
                label: 'Độ ẩm',
                data: benefitsActiveHumidity,
                backgroundColor: ['rgba(54, 162, 235, 0.2)'],
                borderColor: ['rgb(0, 0, 255)'],
                borderWidth: 1,
              },
            ],
          }}
          height={400}
          width={500}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>
    </div>
  );
};

export default Chart;
