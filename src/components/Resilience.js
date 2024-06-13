import React from 'react'
import '../App.css';
import IconText from './IconText';

const Resilience = () =>{
    return (
        <div className='Research-container'>
            <div className='Location'>Resilience, Inc, Tampa, Florida (remote)</div>
            <div className='Job-title'>Frontend Developer (Mobile Application), from December 2023 to Present</div>
            <div className='Advisor'>Manager: Neha Raj; Team lead: John Lu</div>
            
            <ul className='Skill-list'>
                <IconText source='/reactnative.png' text='React Native' />
                <IconText source='/html.png' text='HTML' />
                <IconText source='/css.png' text='CSS' />
                <IconText source='/javascript.png' text='JavaScript' />
                <IconText source='/git.png' text='Git' />
                <IconText source='/expo.png' text='Expo Go' />
            </ul>
            
            <ul className='Description-list'>
                <li>Collaborate in developing, testing a mobile app called AIMME with many tools to learn emotional intelligence</li>
                <li>Contribute over 60+ hours to accomplish 30+ tasks of implementing new features and fixing bugs</li>
                <li>Utilize React Native and multiple react hooks for frontend development: useState, useEffect, useRef, etc.</li>
                <li>Utilize Git for version control; Attend both weekly team meetings and team lead/manager one-on-one meetings</li>
            </ul>
        </div>
    )
}

export default Resilience;