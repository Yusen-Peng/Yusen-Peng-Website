import React from 'react'
import '../App.css';
import Resilience from '../components/Resilience';
import Nstem from '../components/Nstem';


const Industry = () =>{
    return (
        <div className='Research-section'>
            <header className='Research-heading'>Industry expertise</header>
            <p className='Interest'>web frontend development, mobile frontend development</p>
            <header className='Research-heading'>Internship Experience</header>
            <div className='Research-list-container'>
                <Nstem/>
                <Resilience/> 
            </div>
        </div>
        
    )
}

export default Industry;