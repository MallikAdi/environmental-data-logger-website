import React from "react";
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
  console.log("Fetched Data:", data);
  const temperatureData = data ? data.map((item) => item.Temp) : [];
  return (
    <div className="homeScreenContainer">
      <div className="lower-layer">
        <div className="strip">
          <span className="icon">
            <FaTemperatureEmpty />
          </span>
          <span className="icon">
            <IoRainySharp />
          </span>
          <span className="icon">
            <TbDroplet />
          </span>
          <span className="icon">
            <MdOutlineLineStyle />
          </span>
        </div>

        <div className="sidebar">
          <Sidebar temperatureData={temperatureData} />
        </div>
        <div className="graph">
          <Graph temperatureData={temperatureData} />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
