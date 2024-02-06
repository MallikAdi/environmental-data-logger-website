import React from 'react'
import "./ComponentStyles.css"

const Sidebar = () => {
  return (
    <div className="sidebarContainer">
      <div className="sidebarHeader">
        <span className="sidebarQuantityTitle">Temperature</span>
      </div>
      <div className="sidebarBody">
        <div className="sidebarQuantityGIF">Temperature Gif</div>
        <p className="sidebarQuantityCurrentValue">Current Value</p>
        <p className="sidebarQuantityAverageValue">Average Value</p>
      </div>
      <div className="sidebarFooter">
        5 icons
      </div>
    </div>
  )
}

export default Sidebar