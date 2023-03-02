import React from 'react'

import CarouselAbout from './Carousel/CarouselAbout'
import Competencies from './Competencies/Competencies'
import FlushExample from './FlushExample/FlushExample'

import images from '../../assets/images/back.png'
import play from '../../assets/images/play.png'


import './Content.css'

function Content() {
    return (
        <>
            <div className='main-page'>
                <img src={images} />
                <div className='name-site'>
                    <h3>Мы ждём вас</h3>
                    <h1>IT - CUBE</h1>
                    <h2>обучайся с нами</h2>
                    <div className='button-content'>
                        <button><h3>Подробнее</h3><img src={play} /></button>
                    </div>
                </div>
            </div>
            <div className='about-it'>
                <h1>IT - CUBE</h1>
                <h2>Наши цели, мечты и ожидания</h2>
                <div className='carousel-about'>
                    <CarouselAbout />
                </div>
            </div>
            <Competencies />
            <FlushExample />
        </>

    )
}

export default Content