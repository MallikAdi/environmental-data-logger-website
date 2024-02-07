import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import './ComponentStyles.css'

interface Props {
  temperatureData: number[];
}

const Graph: React.FC<Props> = ({ temperatureData }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null); // Store reference to chart instance

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // Destroy previous chart instance
    }

    if (chartRef.current && temperatureData.length > 0) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: 'line',
          data: {
            labels: Array.from(Array(temperatureData.length).keys()),
            datasets: [
              {
                label: 'Temperature',
                data: temperatureData,
                borderColor: '#7286D3',
                tension: 0.4,
                fill:{
                  target:'origin',
                  above:'rgba(114, 134, 211,0.2)'
                }
              },
            ],
          },
          options: {
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Time',
                },
              },
              y: {
                title: {
                  display: true,
                  text: 'Temperature (°C)',
                },
              },
            },
          },
        });
      }
    }

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Destroy chart instance on component unmount
      }
    };
  }, [temperatureData]);

  return (
    <div className="graphContainer">
      <canvas 
        ref={chartRef} 
        style={{
          width:'80%',
          margin:'auto'
        }}
    />
    </div>
  );
};

export default Graph;
