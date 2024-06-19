import React from 'react'
import '../App.css';
import Aboutme from '../sections/Aboutme';
import Header from '../components/Header';
import Footer from '../components/Footer';


const HomePage = () =>{
    return (
        <div>
            <Header/>
            <Aboutme/>
            <Footer/>
        </div>
    )
}

export default HomePage;