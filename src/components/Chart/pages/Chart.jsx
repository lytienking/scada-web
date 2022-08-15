import { useState, useEffect } from 'react';
import scadaApi from '../../../api/scadaApi';
import { Line } from "react-chartjs-2";
const Chart = () => {
    const [benefitsActive, setBenefitsActive] = useState([])
    const [labelData, setLabelData] = useState([])

    useEffect(() => {
        
        let rotationInterval = setInterval(async () => {
            const res = await scadaApi.getAll();
            console.log(res);
            const tempArr = res.map(x => x.id);
            const tempLabelArr = res.map(x => x.createdAt);
            let arr = [];
            tempLabelArr.forEach(element => {
                var tempDate = new Date(element);
                arr.push(tempDate.toLocaleTimeString());
            });
            setBenefitsActive(tempArr);
            setLabelData(arr);
            
        }, 3000)
        
        //Clean up can be done like this
        return () => {
            clearInterval(rotationInterval);
        }
    }) 
    console.log(benefitsActive);
    console.log(labelData);
    return (
        <div className="chart">
        <Line
          data={{
            labels: labelData,
            datasets: [
              {
                label: "Nhiệt độ",
                data: benefitsActive,
                backgroundColor: ["rgba(54, 162, 235, 0.2)"],
                borderColor: ["rgba(255, 159, 64, 1)"],
                borderWidth: 1,
              },
            ],
          }}
          height={400}
          width={500}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
};

export default Chart;