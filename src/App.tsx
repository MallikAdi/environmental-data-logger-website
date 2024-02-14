import React, { useEffect, useState } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { IoRainySharp } from "react-icons/io5";
import { TbDroplet } from "react-icons/tb";
import { MdOutlineLineStyle } from "react-icons/md";
import { FaTemperatureEmpty } from "react-icons/fa6";

function App() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = () => {
      fetch(
        `https://cors-anywhere.herokuapp.com/https://www.irflabs.in/gedl/edllogin.php?userId=pqrs&pass=s1234`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          return response.json();
        })
        .then((jsonData) => {
          setData(jsonData);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    fetchData();
  }, []);

  return (
    <div className="App">
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
        <div className="main-content">
          {/*data ? <HomeScreen data={data} /> : <p>Loading...</p>*/}
          <HomeScreen data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
