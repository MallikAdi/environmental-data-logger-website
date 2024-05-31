import React, { useState } from "react";
import "./LoginScreenStyles.css";

/* const fetchData = (username: string, password: string, setData: any) => {
  fetch(
    `https://cors-anywhere.herokuapp.com/https://www.irflabs.in/gedl/edllogin.php?userId=${username}&pass=${password}`
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
}; */

const fetchData = (username: string, password: string, setData: any) => {
  fetch(`/gedl/get10.php?DevId=G00456&user=abcd&pass=d1234&R=14`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return response.json();
    })
    .then((jsonData) => {
      setData(jsonData);
      console.log(jsonData);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

const LoginScreen = ({ setData, setIsLoggedIn }: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchData(username, password, setData);
    setIsLoggedIn(true);
  };

  return (
    <div className="LoginContainer">
      <div className="LoginCard">
        <img
          className="LoginImage"
          src={require("../assets/quantityIcons/avatar.png")}
          alt=""
        />
        <div className="LoginTextDiv">
          <span className="LoginHeading">Login</span>
          <span className="LoginPhrase">Enter your details</span>
        </div>
        <form onSubmit={handleFormSubmit} className="LoginForm">
          <div className="inputDiv">
            <input
              type="text"
              name="Username"
              id="Username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="text"
              name="Password"
              id="Password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
