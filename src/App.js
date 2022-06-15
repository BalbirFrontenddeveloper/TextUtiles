import React, { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Textform from './Component/Textform';
import Alert from './Component/Alert';


const App = () => {

  // const { alert, showAlert, toggleMode, mode, toggleText } = useGlobalContext();

  const [mode, setMode] = useState("white");
  const [toggleText, setToggleText] = useState("Enable dark mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert("");
    }, 1500);
  };

  const toggleMode = () => {
    if(mode==='white'){
      setMode('black');
      setToggleText("Disable dark mode");
      showAlert('Dark mode enabled','success');
      document.body.style.backgroundColor='grey';
    } else {
      setMode('white')
      setToggleText("Enable dark mode");
      showAlert('Light mode enables','sucess');
      document.body.style.backgroundColor='white';

    }
  }

  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode} toggleText={toggleText}/>
    <Alert alert={alert} showAlert={showAlert} toggleMode={toggleMode}/>
    <Textform mode={mode} alert={alert} showAlert={showAlert}/>
    </>
  )
}

export default App