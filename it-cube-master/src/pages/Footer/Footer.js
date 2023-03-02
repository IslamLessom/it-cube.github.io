import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='bnt-news'>
        <h1>Следите за</h1>
        <Link to='/news'><button>Новостями</button></Link>
      </div>
      <div className='menu-footer'>
        <div className='menu-a'>
          <Link to='/home'>Главная</Link>
          <Link to='/news'>Новости</Link>
        </div>

      </div>
    </div>
  )
}

export default Footer