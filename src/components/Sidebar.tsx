import React from "react";
import "./ComponentStyles.css";

interface Props {
  temperatureData: number[];
  parameter: string;
  unit: string;
}

const Sidebar: React.FC<Props> = ({ temperatureData, parameter, unit }) => {
  const avgTemp =
    temperatureData.length > 0
      ? temperatureData.reduce((acc, curr) => acc + curr, 0) /
        temperatureData.length
      : 0;

  return (
    <div className="sidebarContainer">
      <div className="sidebarHeader">
        <span className="sidebarQuantityTitle">{parameter}</span>
      </div>
      <div className="sidebarBody">
        {parameter === "Temperature" ? (
          <img
            className="sidebarQuantityGIF"
            src={require("../assets/quantityIcons/temperature.png")}
            alt="loading..."
          />
        ) : parameter === "Rain" ? (
          <img
            className="sidebarQuantityGIF"
            src={require("../assets/quantityIcons/rainy.png")}
            alt="loading..."
          />
        ) : parameter === "Humidity" ? (
          <img
            className="sidebarQuantityGIF"
            src={require("../assets/quantityIcons/humidity.png")}
            alt="loading..."
          />
        ) : (
          <img
            className="sidebarQuantityGIF"
            src={require("../assets/quantityIcons/plant.png")}
            alt="loading..."
          />
        )}
        <div className="sidebarQuantityValues">
          <div className="sidebarQuantityCurrentValueDiv">
            <span className="sidebarQuantitySpan">Current:</span>
            <span className="sidebarValueSpan">
              {temperatureData[0]}
              {unit}
            </span>
          </div>
          <div className="sidebarQuantityAverageValueDiv">
            <span className="sidebarQuantitySpan">Average:</span>
            <span className="sidebarValueSpan">
              {avgTemp}
              {unit}
            </span>
          </div>
        </div>
        <p className="sidebarQuantityMessage">It's a good day to sleep in!</p>
      </div>
    </div>
  );
};

export default Sidebar;
