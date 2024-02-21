import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js/auto";
import "./ComponentStyles.css";

interface Props {
  temperatureData: number[];
}

const Graph: React.FC<Props> = ({ temperatureData }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null); // Store reference to chart instance
  const [chartType, setChartType] = useState<"daily" | "weekly" | "monthly">(
    "daily"
  );

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // Destroy previous chart instance
    }

    if (chartRef.current && temperatureData.length > 0) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        if (chartType === "weekly") {
          const weeklyAverages = calculateWeeklyAverage(temperatureData);
          chartInstance.current = new Chart(ctx, {
            type: "bar",
            data: {
              labels: Array.from(
                { length: weeklyAverages.length },
                (_, i) => `Week ${i + 1}`
              ),
              datasets: [
                {
                  label: "Weekly Average Temperature",
                  data: weeklyAverages,
                  backgroundColor: "rgba(114, 134, 211,0.7)",
                  borderWidth: 3,
                },
              ],
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: "Temperature (°C)",
                  },
                },
                x: {
                  title: {
                    display: true,
                    text: "Week",
                  },
                },
              },
            },
          });
        } else if (chartType === "monthly") {
          const monthlyAverages = calculateMonthlyAverage(temperatureData);
          chartInstance.current = new Chart(ctx, {
            type: "bar",
            data: {
              labels: Array.from(
                { length: monthlyAverages.length },
                (_, i) => `Month ${i + 1}`
              ),
              datasets: [
                {
                  label: "Monthly Average Temperature",
                  data: monthlyAverages,
                  backgroundColor: "rgba(114, 134, 211,0.7)",
                  borderWidth: 3,
                },
              ],
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: "Temperature (°C)",
                  },
                },
                x: {
                  title: {
                    display: true,
                    text: "Month",
                  },
                },
              },
            },
          });
        } else {
          chartInstance.current = new Chart(ctx, {
            type: "line",
            data: {
              labels: Array.from(Array(temperatureData.length).keys()),
              datasets: [
                {
                  label: "Temperature",
                  data: temperatureData,
                  borderColor: "#7286D3",
                  tension: 0.4,
                  fill: {
                    target: "origin",
                    above: "rgba(114, 134, 211,0.2)",
                  },
                },
              ],
            },
            options: {
              scales: {
                x: {
                  title: {
                    display: true,
                    text: "Time",
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: "Temperature (°C)",
                  },
                },
              },
            },
          });
        }
      }
    }

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Destroy chart instance on component unmount
      }
    };
  }, [temperatureData, chartType]);

  const handleChartTypeChange = (type: "daily" | "weekly" | "monthly") => {
    setChartType(type);
  };

  function calculateWeeklyAverage(data: number[]) {
    const weeklyAverages: number[] = [];
    const weeks = Math.ceil(data.length / 7);
    for (let i = 0; i < weeks; i++) {
      const start = i * 7;
      const end = Math.min(start + 7, data.length);
      const weekData = data.slice(start, end);
      const weekAverage =
        weekData.reduce((acc, val) => acc + val, 0) / weekData.length;
      weeklyAverages.push(weekAverage);
    }
    return weeklyAverages;
  }

  function calculateMonthlyAverage(data: number[]) {
    const monthlyAverages: number[] = [];
    const months = Math.ceil(data.length / 30);
    for (let i = 0; i < months; i++) {
      const start = i * 30;
      const end = Math.min(start + 30, data.length);
      const monthData = data.slice(start, end);
      const monthAverage =
        monthData.reduce((acc, val) => acc + val, 0) / monthData.length;
      monthlyAverages.push(monthAverage);
    }
    return monthlyAverages;
  }

  return (
    <div className="graph-lower-layer">
      <div className="graphContainer">
        <div className="buttonContainer">
          <button
            className={chartType === "daily" ? "buttonSelected" : "button"}
            onClick={() => handleChartTypeChange("daily")}
          >
            Daily
          </button>
          <button
            className={chartType === "weekly" ? "buttonSelected" : "button"}
            onClick={() => handleChartTypeChange("weekly")}
          >
            Weekly
          </button>
          <button
            className={chartType === "monthly" ? "buttonSelected" : "button"}
            onClick={() => handleChartTypeChange("monthly")}
          >
            Monthly
          </button>
        </div>
        <canvas
          ref={chartRef}
          style={{
            width: "80%",
            margin: "auto",
          }}
        />
      </div>
    </div>
  );
};

export default Graph;
