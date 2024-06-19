import React from 'react'
import '../App.css';
import Highlights from '../components/Highlights';

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
        <header className='Research-heading'>Bio</header>
        <p className='Bio'>
        Yusen Peng is an Honors Computer Science and Engineering student 
        at The Ohio State University, specializing in AI. He has experience 
        as a website intern at the National STEM Honor Society and as a frontend developer
        at Resilience, Inc. Skilled in HTML, CSS, JavaScript, React, Node.js, Python, and 
        AI/ML frameworks, Yusen has a proven track record in developing practical tech solutions 
        and contributing to research in machine learning and data analytics.
        </p>
        <header className='Research-heading'>Research Interest</header>
        <p className='Interest'>machine learning, deep learning, time series, data analytics</p>

        <Highlights/>

        </div>
    )
}

export default Aboutme;