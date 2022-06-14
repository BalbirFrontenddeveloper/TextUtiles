import React from 'react'
import { useGlobalContext } from '../Context'

const Textform = () => {

    const { text, setText, uppercase, lowercase, clear } = useGlobalContext();
  return (
    <div className='textform'>
        <h2>Try TextUtiles : Word counter</h2>
        <div className='form'>
            <form>
                <textarea
                id='texttarea'
                placeholder='Enter text here'
                value={text}
                onChange={(e) => {setText(e.target.value)}}
                />
            </form>
        </div>
        <div className='btn'>
            <button onClick={() => {uppercase()}}></button>
            <button onClick={() => {lowercase()}}></button>
            <button onClick={() => {clear()}}></button>
        </div>
    </div>
  )
}

export default Textform