import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Graph from "../components/Graph";
import "../screens/HomeScreenStyles.css";

import { IoRainySharp } from "react-icons/io5";
import { TbDroplet } from "react-icons/tb";
import { MdOutlineLineStyle } from "react-icons/md";
import { FaTemperatureEmpty } from "react-icons/fa6";

interface Props {
  data: {
    Batt: number;
    Temp: number;
    Hum: number;
    Rain: number;
    SoilM: number;
    TimeS: string;
  }[];
}

const HomeScreen: React.FC<Props> = ({ data }) => {
  const [activeData, setActiveData] = useState<number[]>([]);
  const [activeDataType, setActiveDataType] = useState<string>("");
  const [unit, setUnit] = useState<string>("");

  useEffect(() => {
    // Set default active data to temperature data when component mounts
    if (data && data.length > 0) {
      setActiveData(data.map((item) => item.Temp));
      setActiveDataType("Temperature");
      setUnit("°C");
    }
  }, [data]);

  const handleIconClick = (dataType: string) => {
    switch (dataType) {
      case "temperature":
        setActiveDataType("Temperature");
        setActiveData(data.map((item) => item.Temp));
        setUnit("°C");
        break;
      case "rain":
        setActiveDataType("Rain");
        setActiveData(data.map((item) => item.Rain));
        setUnit("mm");
        break;
      case "humidity":
        setActiveDataType("Humidity");
        setActiveData(data.map((item) => item.Hum));
        setUnit("%");
        break;
      case "soil":
        setActiveDataType("Soil Moisture");
        setActiveData(data.map((item) => item.SoilM));
        setUnit("%");
        break;
      default:
        setActiveData([]);
        break;
    }
  };

  return (
    <div className="homeScreenContainer">
      <div className="lower-layer">
        <div className="strip">
          <span className="icon" onClick={() => handleIconClick("temperature")}>
            <FaTemperatureEmpty />
          </span>
          <span className="icon" onClick={() => handleIconClick("rain")}>
            <IoRainySharp />
          </span>
          <span className="icon" onClick={() => handleIconClick("humidity")}>
            <TbDroplet />
          </span>
          <span className="icon" onClick={() => handleIconClick("soil")}>
            <MdOutlineLineStyle />
          </span>
        </div>

        <div className="sidebar">
          <Sidebar
            temperatureData={activeData}
            parameter={activeDataType}
            unit={unit}
          />
        </div>
        <div className="graph">
          <Graph temperatureData={activeData} />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
