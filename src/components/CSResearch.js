import React from 'react'
import '../App.css';
import IconText from './IconText';

const CSResearch = () =>{
    return (
        <div className='Research-container'>
            <div className='Location'>The Ohio State University, Columbus, Ohio</div>
            <div className='Job-title'>Research Assistant (Computer System), from May 2023 to August 2023</div>
            <div className='Advisor'>Advisor: Dr. Suren Byna</div>
            
            <ul className='Skill-list'>
                <IconText source='/python.png' text='Python' />
                <IconText source='/pandas.png' text='Pandas' />
                <IconText source='/numpy.png' text='NumPy' />
                <IconText source='/matplotlib.png' text='Matplotlib' />
                <IconText source='/linux.png' text='Linux' />
                <IconText source='/latex.png' text='LaTeX' />
            </ul>
            
            <ul className='Description-list'>
                <li>Developed benchmarks to compare file I/O performance with CSV, HDF5, netCDF4, and Zarr</li>
                <li>Processed and visualized timing data with csv files and plots using Python, pandas, numPy, matplotlib</li>
                <li>Designed 20+ test cases on Linux and accomplished a research paper in LaTeX of 13 pages with 35+ figures</li>
                <li>Presented research posters at two annual research forums at The Ohio State University: 2024 Undergraduate Research Forum 
                    for Engineering and Architecture and 2024 CSE Graduate Student Visit Day</li>
            </ul>

            <ul className='Highlight-list'>
                <li><div className='Highlight-item'><a href='https://drive.google.com/file/d/1oGBEicCZzNmaQ1xpNjBNCLg2Veo_ZELl/view'><img className='Highlight-img' src='/paper.png' alt=''/></a><header className='Highlight-text'>final research paper</header></div></li>
                <li><div className='Highlight-item'><a href='https://github.com/Yusen-Peng/SU23_File_Performance_Research'><img className='Highlight-img' src='/sourcecode.png' alt=''/></a><header className='Highlight-text'>source code</header></div></li>
            </ul>   
        </div>
    )
}

export default CSResearch;