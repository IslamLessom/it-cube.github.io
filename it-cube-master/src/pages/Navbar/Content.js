import React from 'react'

import CreatePost from "../CreatePost/CreatePost"
import Home from "../Home/Home"
import Content from '../Content/Content'
import Edit from '../Content/Edit/Edit'

import { useState } from 'react';
import { signOut } from "firebase/auth"
import { auth, provider } from '../../firebase-config';
import { signInWithPopup } from 'firebase/auth'

import vk from '../../assets/images/vk.png'
import telegram from '../../assets/images/telegram.png'
import youtube from '../../assets/images/youtube.png'
import ok from '../../assets/images/ok.png'
import user from '../../assets/images/user.png'
import logOut from '../../assets/images/log-out.png'
import phone from '../../assets/images/call.png'
import email from '../../assets/images/email.png'
import placeholder from '../../assets/images/placeholder.png'
import cube from '../../assets/images/it-cube.png'

import './Contact.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Footer from '../Footer/Footer';

function Contact() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"))

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
    })
  }

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true)
      setIsAuth(true)
    })
  }

  return (
    <>
      <Router>
        <div className='contact-nav'>
          <div className='contact-names'>
            <h2>Найдите нас в социальных сетях - </h2>
          </div>

          <div className='contact'>
            <Link><img src={vk} /></Link>
            <Link><img src={telegram} /></Link>
            <Link><img src={youtube} /></Link>
            <Link><img src={ok} /></Link>
          </div>
          <div className='cloud'>
            {!isAuth ? (
              <>
                <Link><button onClick={signInWithGoogle}><img src={user} /></button></Link>
              </>

            ) : (
              <>
                {auth.lastNotifiedUid === 'uhQNDHD6QTMnziRYqN7eqAPS3gh2' && (
                  <Link to='/create' className='create-news'>Создать новость</Link>
                )}

                <button onClick={signUserOut}><img src={logOut} /></button>
              </>
            )}
          </div>
        </div>
        <div className='contents'>
          <div className='logo-name'>
            <img src={cube} />
            <h1>IT-CUBE</h1>
          </div>
          <div className='phone-contact'>
            <img src={phone} />
            <div className='phone-description'>
              <p>Наш телефон - </p>
              <h3>+7 (967) 406-33-58</h3>
            </div>
          </div>
          <div className='phone-contact'>
            <img src={email} />
            <div className='phone-description'>
              <p>Наша почта - </p>
              <h3>mem.m.1979@mail.ru</h3>
            </div>
          </div>
          <div className='phone-contact'>
            <img src={placeholder} />
            <div className='phone-description'>
              <p>Наш адрес - </p>
              <h3>Г. Кизляр , ул Победы</h3>
            </div>
          </div>
        </div>
        <div className='menu'>
          <Link to='/home'>Главная</Link>
          <Link to='/news'>Новости</Link>
        </div>
        <Routes>
          <Route path='/create' element={<CreatePost isAuth={isAuth} />} />
          <Route path='/news' element={<Home />} />
          <Route path='/home' element={<Content />} />
          <Route path='/update/:id' element={<CreatePost isAuth={isAuth} />} />
        </Routes>

        <Footer />
      </Router>

    </>

  )
}

export default Contact