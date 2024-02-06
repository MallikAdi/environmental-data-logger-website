import React from 'react'
import Sidebar from '../components/Sidebar'
import Graph from '../components/Graph'
import '../screens/HomeScreenStyles.css'

const HomeScreen = () => {
  return (
    <div className="homeScreenContainer">
      <div className="sidebar"><Sidebar/></div>
      <div className="graph"><Graph/></div>
    </div>
  )
}

export default HomeScreen