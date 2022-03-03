import React from 'react'

function Header() {

  const headerText = "Oops, I almost forgot";

  return (
    <div className='Header-container'>
      <h1 className='header'>{headerText}</h1>
    </div>
  )
}

export default Header