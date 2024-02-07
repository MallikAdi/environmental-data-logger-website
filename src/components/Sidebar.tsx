import React from 'react'
import "./ComponentStyles.css"



const Sidebar = () => {
  return (
    <div className="sidebarContainer">
      <div className="sidebarHeader">
        <span className="sidebarQuantityTitle">Temperature</span>
      </div>
      <div className="sidebarBody">
        <img className="sidebarQuantityGIF" src={require('../assets/quantityIcons/temperature.gif')} alt="loading..." />
        <div className="sidebarQuantityText">
        <p className="sidebarQuantityCurrentValue">Current Value</p>
        <p className="sidebarQuantityAverageValue">Average Value</p>
        <p className="sidebarQuantityMessage">It's a good day to sleep in!</p>
        </div>
      </div>
      <div className="sidebarFooter">
        5 icons
      </div>
    </div>
  )
}

export default Sidebar