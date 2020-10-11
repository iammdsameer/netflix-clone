import React, { useEffect, useState } from 'react'
import './Nav.css'

const Nav = () => {
  const [handleShow, setHandleShow] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setHandleShow(true)
      } else setHandleShow(false)
      return () => {
        window.removeEventListener('scroll')
      }
    })
  }, [])
  return (
    <div className={`nav ${handleShow && 'nav__black'}`}>
      <img className='nav__logo' src='https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png' alt='brand' />
      <img className="nav__avatar" src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="user" />
    </div>
  )
}

export default Nav