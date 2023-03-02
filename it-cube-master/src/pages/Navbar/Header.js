import React from 'react'

import Content from './Content'


import './Header.css'

function Header() {
    return (
        <div className='header'>
            <nav className='navbar'>
                <Content />
            </nav>
        </div>
    )
}

export default Header