import React from 'react'
import '../App.css';
import IconText from './IconText';

const AIResearch = () =>{
    return (
        <div className='Research-container'>
            <div className='Location'>The DATUM Lab @ The Ohio State University, Columbus, Ohio</div>
            <div className='Job-title'>Research Assistant (Machine Learning), from January 2024 to Present</div>
            <div className='Advisor'>Advisor: Dr. John Paparrizos; Mentor: Ryan DeMilt</div>
            
            <ul className='Skill-list'>
                <IconText source='/python.png' text='Python' />
                <IconText source='/sklearn.png' text='sklearn' />
                <IconText source='/torch.png' text='PyTorch' />
                <IconText source='/numpy.png' text='NumPy' />
                <IconText source='/git.png' text='Git' />
                <IconText source='/timeseries.png' text='time series' />
            </ul>
            
            
            <ul className='Description-list'>
                <li>Collaborate in implementing, documenting, and testing a time series classification library called SIGNAL</li>
                <li>Read research papers extensively and make google slides for a total of 6+ time series classification algorithms </li>
                <li>Adapt the corresponding sklearn/PyTorch source code carefully and analyze it modularly for each classifier</li>
                <li>Utilize Git for version control; Attend weekly team meetings and office hours to report updates and fix bugs</li>
            </ul>

            <ul className='Highlight-list'>
                <li><div className='Highlight-item'><a href='https://docs.google.com/presentation/d/1k6rfVq2M9b9cEuofH49JKJwYSx5qA6BS66_Rg9OqOuo/edit#slide=id.p'><img className='Highlight-img' src='/weasel.png' alt=''/></a><header className='Highlight-text'>WEASEL classifier</header></div></li>
                <li><div className='Highlight-item'><a href='https://docs.google.com/presentation/d/1GxtTWV8M9-HjTuemRF3Itw-p1NzUJwmPpQCFC8Ty8dY/edit#slide=id.p'><img className='Highlight-img' src='/weasel2.png' alt=''/></a><header className='Highlight-text'>WEASEL 2.0 classifier</header></div></li>

                <li><div className='Highlight-item'><a href='https://docs.google.com/presentation/d/1XqPxCez9eYrbyd43-xZDa7wk-7jOAvUoz9LyCC9suwI/edit#slide=id.g2be5d138705_0_100'><img className='Highlight-img' src='/weaselmuse.png' alt=''/></a><header className='Highlight-text'>WEASEL + MUSE classifier</header></div></li>

                <li><div className='Highlight-item'><a href='https://docs.google.com/presentation/d/1z-Xt4ZAAIbNHBBvXEG1agW2RUc9NYoMa1Um-3WLw73s/edit#slide=id.p'><img className='Highlight-img' src='/tde.png' alt=''/></a><header className='Highlight-text'>TDE classifier</header></div></li>

                <li><div className='Highlight-item'><a href='https://docs.google.com/presentation/d/1c1xyysL2Yk1ew547BJf_QcUJykwG-PYkollieFGbwH4/edit#slide=id.p'><img className='Highlight-img' src='/quant.png' alt=''/></a><header className='Highlight-text'>QUANT classifier</header></div></li>
            </ul>
        </div>
    )
}

export default AIResearch;