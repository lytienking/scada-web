import { useState, useEffect } from 'react';
import scadaApi from '../../../api/scadaApi';
import { Bar } from "react-chartjs-2";
const Chart = () => {
    const [benefitsActive, setBenefitsActive] = useState([])
    const [labelData, setLabelData] = useState([])

    useEffect(() => {
        
        let rotationInterval = setInterval(async () => {
            const res = await scadaApi.getAll();
            console.log(res);
            const tempArr = res.map(x => x.id);
            const tempLabelArr = res.map(x => x.createdAt);
            setBenefitsActive(tempArr);
            setLabelData(tempLabelArr);
            
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
        <Bar
          data={{
            labels: labelData,
            datasets: [
              {
                label: "Theo tháng",
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
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
      </div>
    );
};

export default Chart;