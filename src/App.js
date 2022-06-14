import React, { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Textform from './Component/Textform'
import Contact from './Contact'


const App = () => {

  const [mode, setMode] = useState("white");
  const [toggleText, setToggleText] = useState("Enable dark mode")

  const toggleMode = () => {
    if(toggleText==="Enable dark mode"){
      setMode('black')
      setToggleText("Disable dark mode")
    } else {
      setMode('white')
      setToggleText("Enable dark mode");
    }
  }

  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode} toggleText={toggleText}/>
    {/* <Contact /> */}
    <Textform mode={mode}/>
    </>
  )
}

export default App