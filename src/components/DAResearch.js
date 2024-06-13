import React from 'react'
import '../App.css';
import IconText from './IconText';

const DAResearch = () =>{
    return (
        <div className='Research-container'>
            <div className='Location'>The Ohio State University, Columbus, Ohio</div>
            <div className='Job-title'>Research Assistant (Data Analytics), from September 2023 to April 2024</div>
            <div className='Advisor'>Advisor: Dr. Kelsea Best</div>
            
            <ul className='Skill-list'>
                <IconText source='/python.png' text='Python' />
                <IconText source='/pandas.png' text='Pandas' />
                <IconText source='/matplotlib.png' text='Matplotlib' />
                <IconText source='/seaborn.png' text='Seaborn' />
                <IconText source='/statsmodels.png' text='Statsmodels' />
                <IconText source='/git.png' text='Git' />
            </ul>
            
            <ul className='Description-list'>
                <li>Analyzed natural disaster and public housing datasets from exploratory, correlation, and regression perspectives</li>
                <li>Integrated Python with pandas, matplotlib, seaborn, statsmodels to generate a total of 40+ figures </li>
                <li>Utilized Git for version control; Attend weekly Zoom meetings to report updates and contribute new ideas</li>
                <li>Contributed as a co-author of a conference publication: “Assessing the equity implications of flood risk to public housing across the United States” at 2024 The Society for Risk Analysis Annual Meeting (incoming)</li>
            </ul>
            
            <ul className='Highlight-list'>
                <li><div className='Highlight-item'><a href='https://docs.google.com/presentation/d/1BZ7YyTtGgo4QcXyAcPD2jSY4N6QIEsnzVDhXpU5Fk7U/edit#slide=id.g27380bcf0c5_1_45'><img className='Highlight-img' src='/autumn23.png' alt=''/></a><header className='Highlight-text'>Autumn 2023 final presentation</header></div></li>
                <li><div className='Highlight-item'><a href='https://docs.google.com/presentation/d/1IIMqZRHWCTnEEAsgFMHIzNWBjNPTwCLfo3unaKgk8Vw/edit#slide=id.p'><img className='Highlight-img' src='/final.png' alt=''/></a><header className='Highlight-text'>Spring 2024 final presentation</header></div></li>
            </ul>   
        </div>
    )
}

export default DAResearch;