import React, { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Textform from './Component/Textform'


const App = () => {

  const [mode, setMode] = useState("white");
  const [toggleText, setToggleText] = useState("Enable dark mode")

  const toggleMode = () => {
    setMode("black");
    setToggleText("Disable dark mode");
  }

  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode} toggleText={toggleText}/>
    <Textform mode={mode}/>
    </>
  )
}

export default App