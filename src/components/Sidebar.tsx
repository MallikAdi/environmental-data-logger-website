import React from "react";
import "./ComponentStyles.css";

interface Props {
  temperatureData: number[];
}

const Sidebar: React.FC<Props> = ({ temperatureData }) => {
  const avgTemp =
    temperatureData.length > 0
      ? temperatureData.reduce((acc, curr) => acc + curr, 0) /
        temperatureData.length
      : 0;

  return (
    <div className="sidebarContainer">
      <div className="sidebarHeader">
        <span className="sidebarQuantityTitle">Temperature</span>
      </div>
      <div className="sidebarBody">
        <img
          className="sidebarQuantityGIF"
          src={require("../assets/quantityIcons/temperature.png")}
          alt="loading..."
        />

        <div className="sidebarQuantityValues">
          <div className="sidebarQuantityCurrentValueDiv">
            <span className="sidebarQuantitySpan">Current:</span>
            <span className="sidebarValueSpan">{temperatureData[0]}°C</span>
          </div>
          <div className="sidebarQuantityAverageValueDiv">
            <span className="sidebarQuantitySpan">Average:</span>
            <span className="sidebarValueSpan">{avgTemp}°C</span>
          </div>
        </div>
        <p className="sidebarQuantityMessage">It's a good day to sleep in!</p>
      </div>
    </div>
  );
};

export default Sidebar;
