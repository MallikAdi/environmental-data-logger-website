import React from "react";
import "./LoginScreenStyles.css";

const LoginScreen = () => {
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
        <form action="handleSubmission" className="LoginForm">
          <div className="inputDiv">
            <input
              type="text"
              name="Username"
              id="Username"
              placeholder="Username"
            />
            <input
              type="text"
              name="Password"
              id="Password"
              placeholder="Password"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
