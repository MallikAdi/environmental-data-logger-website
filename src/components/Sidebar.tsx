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
        <div className="sidebarQuantityText">
          <div className="sidebarQuantityValues">
            <div className="sidebarQuantity">
              <p>Current:</p>
              <p>{temperatureData[0]}°C</p>
            </div>
            <div className="sidebarQuantityValue">
              <p>Average:</p>
              <p>{avgTemp}°C</p>
            </div>
          </div>
          <p className="sidebarQuantityMessage">It's a good day to sleep in!</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
