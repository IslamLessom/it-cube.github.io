import React from 'react'

import robot from '../../../assets/images/robo_1.svg'
import vr from '../../../assets/images/vr.svg'
import python from '../../../assets/images/python.svg'


import './Competencies.css'
import ModalIcon from '../Modal/ModalIcons'


function Competencies(props) {
    const db = [
        {
            id: '1',
            name: 'Программирование на Python',
            smallDescription: 'Мы научим:',
            bigDescription: [
                '- Программировать на языке Python.',
                '- Разрабатывать прикладные программы.',
                '- Работать с библиотеками языка.',
                ' - Работать с библиотеками языка.',
                '- Использовать математику в практике.',
                '- Генерировать и продвигать идеи.',
                '- Работать в команде.'
            ],
            fulDescriptions: 'Ты здесь станешь ультра мозгом',
            images: python
        },
        {
            id: '2',
            name: 'Программирование на Python',
            smallDescription: 'Мы научим:',
            bigDescription: [
                '- Программировать на языке Python.',
                '- Разрабатывать прикладные программы.',
                '- Работать с библиотеками языка.',
                ' - Работать с библиотеками языка.',
                '- Использовать математику в практике.',
                '- Генерировать и продвигать идеи.',
                '- Работать в команде.'
            ],
            fulDescriptions: 'Ты здесь станешь ультра мозгом!!!!',
            images: vr,
        },
        {
            id: '2',
            name: 'Программирование на Python',
            smallDescription: 'Мы научим:',
            bigDescription: [
                '- Программировать на языке Python.',
                '- Разрабатывать прикладные программы.',
                '- Работать с библиотеками языка.',
                ' - Работать с библиотеками языка.',
                '- Использовать математику в практике.',
                '- Генерировать и продвигать идеи.',
                '- Работать в команде.'
            ],
            fulDescriptions: 'Ты здесь станешь ультра мозгом!!!!',
            images: vr,
        },
        {
            id: '2',
            name: 'Программирование на Python',
            smallDescription: 'Мы научим:',
            bigDescription: [
                '- Программировать на языке Python.',
                '- Разрабатывать прикладные программы.',
                '- Работать с библиотеками языка.',
                ' - Работать с библиотеками языка.',
                '- Использовать математику в практике.',
                '- Генерировать и продвигать идеи.',
                '- Работать в команде.'
            ],
            fulDescriptions: 'Ты здесь станешь ультра мозгом!!!!',
            images: vr,
        },
        {
            id: '2',
            name: 'Программирование на Python',
            smallDescription: 'Мы научим:',
            bigDescription: [
                '- Программировать на языке Python.',
                '- Разрабатывать прикладные программы.',
                '- Работать с библиотеками языка.',
                ' - Работать с библиотеками языка.',
                '- Использовать математику в практике.',
                '- Генерировать и продвигать идеи.',
                '- Работать в команде.'
            ],
            fulDescriptions: 'Ты здесь станешь ультра мозгом!!!!',
            images: vr,
        },
        {
            id: '2',
            name: 'Программирование на Python',
            smallDescription: 'Мы научим:',
            bigDescription: [
                '- Программировать на языке Python.',
                '- Разрабатывать прикладные программы.',
                '- Работать с библиотеками языка.',
                ' - Работать с библиотеками языка.',
                '- Использовать математику в практике.',
                '- Генерировать и продвигать идеи.',
                '- Работать в команде.'
            ],
            fulDescriptions: 'Ты здесь станешь ультра мозгом!!!!  Ты здесь станешь ультра мозгом!!!!  Ты здесь станешь ультра мозгом!!!!  Ты здесь станешь ультра мозгом!!!!  Ты здесь станешь ультра мозгом!!!!  Ты здесь станешь ультра мозгом!!!!  ',
            images: vr,
        }
    ]
    return (
        <div>
            <div className='competencies'>
                <h1>IT-CUBE</h1>
                <h3>Компитенции</h3>
                <div className='all-card-competencies'>
                    {db.map((des) => {
                        return (
                            <div className='card-competencies' key={des.id}>

                                <div className='img-block-card'>
                                    <img src={des.images} />
                                </div>
                                <div className='text'>
                                    <h4><b>{des.name}</b></h4>
                                    <p>
                                        <b>{des.smallDescription}</b>
                                        {des.bigDescription.map((descriptions, index) => {
                                            return (
                                                <div key={index}>
                                                    {descriptions}
                                                </div>
                                            )
                                        })}
                                    </p>
                                </div>

                                <ModalIcon fullDes={des.fulDescriptions} />
                            </div>
                        )

                    })

                    }

                </div>

            </div>
        </div>
    )
}

export default Competencies