import React from 'react'
import "./cover.css"

function Cover({children, setShow}) {
  function handleClick() {
    setShow(false);
  }
  return (
    <>
    <div className='cover opacity'>
    </div>
    <div className='cover'>
      <div className="cancle center" onClick={handleClick}>x</div>
        {children}
    </div>
    </>
  )
}

export default Cover