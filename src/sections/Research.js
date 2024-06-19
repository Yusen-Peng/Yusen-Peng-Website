import React from 'react'
import '../App.css';
import AIResearch from '../components/AIResearch';
import DAResearch from '../components/DAResearch';
import CSResearch from '../components/CSResearch';

const Research = () =>{
    return (
        <div className='Research-section'>
            <div className='Research-list-container'>
                <AIResearch/>
                <DAResearch/>
                <CSResearch/>
            </div>
        </div>
        
    )
}

export default Research;