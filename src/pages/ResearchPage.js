import React from 'react'
import '../App.css';
import Research from '../sections/Research';
import Header from '../components/Header';
import Footer from '../components/Footer';


const ResearchPage = () =>{
    return (
        <div>
            <Header/>
            <Research/> 
            <Footer/>
        </div>
    )
}

export default ResearchPage;