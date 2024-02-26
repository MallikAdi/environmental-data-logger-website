import React from "react";
import { useEffect, useRef } from "react";

import "./ComponentStyles.css";

interface Props {
  temperatureData: number[];
  parameter: string;
  unit: string;
}

const Sidebar: React.FC<Props> = ({ temperatureData, parameter, unit }) => {
  const gifRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    // Trigger animation when the component receives new props
    if (gifRef.current) {
      gifRef.current.classList.add("animate");
      setTimeout(() => {
        if (gifRef.current) {
          gifRef.current.classList.remove("animate");
        }
      }, 500); // Animation duration
    }
  }, [parameter]);

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
            ref={gifRef}
            className="sidebarQuantityGIF"
            src={require("../assets/quantityIcons/temperature.png")}
            alt="loading..."
          />
        ) : parameter === "Rain" ? (
          <img
            ref={gifRef}
            className="sidebarQuantityGIF"
            src={require("../assets/quantityIcons/rainy.png")}
            alt="loading..."
          />
        ) : parameter === "Humidity" ? (
          <img
            ref={gifRef}
            className="sidebarQuantityGIF"
            src={require("../assets/quantityIcons/humidity.png")}
            alt="loading..."
          />
        ) : (
          <img
            ref={gifRef}
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
