import React, { useState } from 'react'
// import { useGlobalContext } from '../Context'

const Textform = (props) => {

    // , uppercase, lowercase, clear

    // const { text, setText, uppercase, lowercase, clear } = useGlobalContext();

    const [text, setText] = useState("");

    const uppercase = () => {
        let newtext;
        newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to uppercase","success");
    }

    const lowercase = () => {
        let newtext;
        newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to lowercase","success")
    }

    const clear = () => {
        setText("");
        props.showAlert("Test has been cleared","success")
    }

  return (
    <div className='textform' style={{color:`${props.mode==='white' ? 'black' : 'white'}`, backgroundColor:`${props.mode==='white' ? 'white' : 'grey'}`}}>
        <h2>Try TextUtiles : Word counter</h2>
        <div className='form'>
            <form onSubmit={(e) => e.preventDefault}>
                <textarea
                id='texttarea'
                placeholder='Enter text here'
                value={text}
                onChange={(e) => {setText(e.target.value)}}
                rows="10"
                cols="80"
                style={{color:`${props.mode==='white' ? 'black' : 'white'}`, backgroundColor:`${props.mode==='white' ? 'white' : '#2b5197'}`}}
                />
            </form>
        </div>
        <div className='textform-btn'>
            <button className='btn' onClick={() => {uppercase()}}>Conver to uppercase</button>
            <button className='btn' onClick={() => {lowercase()}}>convert to lowercase</button>
            <button className='btn' onClick={() => {clear()}}>clear</button>
        </div>
        <div className='summary'>
            <h3>Text Summary</h3>
            <p>{text.split(' ').filter((curElem) => curElem.length !== 0).length} words and {text.length} characters</p>
            <h3>Text Preview</h3>
            <p>{text}</p>
            <p>{(text.split(' ').filter((curElem) => curElem.length !== 0).length)*0.008} minutes read</p>
        </div>
    </div>
  )
}

export default Textform;