import React, { useState } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";

function App() {
  const [data, setData] = useState<
    {
      Batt: number;
      Temp: number;
      Hum: number;
      Rain: number;
      SoilM: number;
      TimeS: string;
    }[]
  >([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      {isLoggedIn ? (
        <HomeScreen data={data} />
      ) : (
        <LoginScreen setData={setData} setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
