import React from 'react'
import '../App.css';
import IconText from './IconText';

const Nstem = () =>{
    return (
        <div className='Research-container'>
            <div className='Location'>National STEM Honor Society, Gloucester, Massachusetts (remote)</div>
            <div className='Job-title'>Website and Technology Intern, from May 2024 to Present</div>
            <div className='Advisor'>Team lead: William Norboe; Team co-lead: Haram Jamil</div>
            
            <ul className='Skill-list'>
                <IconText source='/wordpress.png' text='WordPress' />
                <IconText source='/html.png' text='HTML' />
                <IconText source='/css.png' text='CSS' />
                <IconText source='/chrome.png' text='Chrome Inspector' />
            </ul>
            
            <ul className='Description-list'>
                <li>Collaborate in developing, improving, testing, and maintaining the National STEM official website</li>
                <li>Write HTML and custom CSS snippets within WordPress to create responsive web pages and fix bugs</li>
                <li>Attend both weekly tech department meetings and website redesign team meetings to report updates</li>
            </ul>

            <ul className='Highlight-list'>
                <li><div className='Highlight-item'><a href='https://nstem.org/stage/'><img className='Highlight-img' src='/company.png' alt=''/></a><header className='Highlight-text'>Company website</header></div></li>
            </ul> 
        </div>
    )
}

export default Nstem;