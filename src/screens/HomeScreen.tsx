import React from 'react'
import Sidebar from '../components/Sidebar'
import Graph from '../components/Graph'
import '../screens/HomeScreenStyles.css'

interface Props{
  data: {
    Batt: number;
    Temp: number;
    Hum: number;
    Rain: number;
    SoilM: number;
    TimeS: string;
  }[];
}

const HomeScreen:React.FC<Props> = ({data}) => {
  console.log('Fetched Data:', data);
  const temperatureData = data ? data.map(item => item.Temp) : [];
  return (
    <div className="homeScreenContainer">
      <div className="sidebar"><Sidebar temperatureData={temperatureData}/></div>
      <div className="graph" >
        <Graph temperatureData={temperatureData}/>
      </div>
    </div>
  )
}

export default HomeScreen