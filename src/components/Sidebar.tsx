import React from 'react'
import "./ComponentStyles.css"

interface Props{
  temperatureData:number[];
}

const Sidebar:React.FC<Props> = ({temperatureData}) => {

  const avgTemp=temperatureData.length>0?temperatureData.reduce((acc,curr)=>acc+curr,0)/temperatureData.length : 0;

  return (
    <div className="sidebarContainer">
      <div className="sidebarHeader">
        <span className="sidebarQuantityTitle">Temperature</span>
      </div>
      <div className="sidebarBody">
        <img className="sidebarQuantityGIF" src={require('../assets/quantityIcons/temperature.png')} alt="loading..." />
        <div className="sidebarQuantityText">
        <p className="sidebarQuantityCurrentValue">Current Value</p>
        <p className="sidebarQuantityCurrentValue">{temperatureData[0]}</p>
        <p className="sidebarQuantityAverageValue">Average Value </p>
        <p className="sidebarQuantityAverageValue">{avgTemp} </p>
        <p className="sidebarQuantityMessage">It's a good day to sleep in!</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar