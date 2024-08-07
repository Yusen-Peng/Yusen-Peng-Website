import React from 'react'
import '../App.css';
import ResumeDownload from '../components/ResumeDownload';
import Bio from '../components/Bio';
import News from '../components/News';

const Aboutme = () =>{
    return (
        <div className='Research-section'> 
            <div className='About-me-container'>
                <div className='Heading-container'>
                    <header className='Heading-title'>Yusen Peng</header>
                    <header className='Heading-subtitle'>CSE student at The Ohio State University</header>
                    <div className='Icon-container'>
                        <a href='https://www.linkedin.com/in/yusen-peng-864a75260'><img className='Icon-image' src='/linkedin.png' alt='something'/></a>
                        <a href='https://github.com/Yusen-Peng?tab=repositories'><img className='Icon-image' src='/github.png' alt='something'/></a>
                    </div>   
                </div>
                <img className='Heading-image' src='/profile2.jpg' alt='something'/>  
            </div>
            

            <div className='Parallel-container'>
                <Bio/>
                <ResumeDownload/>
            </div>
            
            <News/>
        </div>
    )
}

export default Aboutme;