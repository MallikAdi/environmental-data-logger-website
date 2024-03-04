import React, { useEffect, useState } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";

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
      <LoginScreen />
      {/* <div className="lower-layer">
        <HomeScreen data={data} />
      </div> */}
    </div>
  );
}

export default App;
