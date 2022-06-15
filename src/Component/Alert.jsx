import React from 'react'

const Alert = (props) => {
  return (
    <>
    { props.alert && <div className='alert' role='alert'>
        {props.alert.msg} : <strong>{props.alert.type}</strong>
    </div>}
    </>
  )
}

export default Alert