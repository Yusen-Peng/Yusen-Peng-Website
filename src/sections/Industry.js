import React from 'react'
import '../App.css';
import Resilience from '../components/Resilience';
import Nstem from '../components/Nstem';


const Industry = () =>{
    return (
        <div className='Research-section'>
            <header className='Research-heading'>Intership Experience</header>
            <div className='Research-list-container'>
                <Resilience/>
                <Nstem/>
            </div>
        </div>
        
    )
}

export default Industry;