import React from 'react'
import NavBar from "../navbar/NavBar";

const Home = ({ isDark, handleThemeChange}) => {
  return (
    <div>
      <NavBar handleThemeChange={ handleThemeChange}/>
      <h1>My Portfolio</h1>
    </div>
  )
}

export default Home