import React from 'react'
import '../App.css';

const Highlights = (props) =>{
    return (
        <div>
            <header className='Research-heading'>Highlights</header>
            <ul className='Pic-list'>
                <li><img className='Pic' src='/highlight1.jpg' alt=''/><header className='Highlight-text'>2024 Undergraduate Engineering Research Forum</header></li>
                <li><img className='Pic' src='/highlight3.jpg' alt=''/><header className='Highlight-text'>2022 Hack OHI/O</header></li>
            </ul>
        </div>
    )
}

export default Highlights;