import React from 'react'
import '../App.css';
import Highlights from '../components/Highlights';
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
                        <a href='https://leetcode.com/u/YusenPeng/'><img className='Icon-image' src='/leetcode.png' alt='something'/></a>
                        <a href='https://www.instagram.com/yusenpeng_/'><img className='Icon-image' src='/instagram.png' alt='something'/></a>
                        <a href='https://www.youtube.com/channel/UCY8AKuBXbPN-ggRaopKQDxg'><img className='Icon-image' src='/youtube.png' alt='something'/></a>
                    </div>   
                </div>
                <img className='Heading-image' src='/profile.png' alt='something'/>  
            </div>
            

            <div className='Parallel-container'>
                <Bio/>
                <ResumeDownload/>
            </div>
            
            <News/>
            <Highlights/>
        </div>
    )
}

export default Aboutme;