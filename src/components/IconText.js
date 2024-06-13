import React from 'react'
import '../App.css';

const IconText = (props) =>{
    return (
        <div className='IconText-container'>
            <img className='Icon-image' src={props.source} alt='stuff'/>
            <header className='Skill'>{props.text}</header>
        </div>
    )
}

export default IconText;