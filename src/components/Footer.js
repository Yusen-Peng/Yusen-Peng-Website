import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <div className='Footer'>
        <h1>contact and connect with me!</h1>
        <div className='Icon-container'>
            <a href='https://www.linkedin.com/in/yusen-peng-864a75260'><img className='Icon-image' src='/linkedin.png' alt='something'/></a>
            <a href='https://github.com/Yusen-Peng?tab=repositories'><img className='Icon-image' src='/github.png' alt='something'/></a>
            <a href='https://leetcode.com/u/YusenPeng/'><img className='Icon-image' src='/leetcode.png' alt='something'/></a>
            <a href='https://www.instagram.com/yusenpeng_/'><img className='Icon-image' src='/instagram.png' alt='something'/></a>
            <a href='https://www.youtube.com/channel/UCY8AKuBXbPN-ggRaopKQDxg'><img className='Icon-image' src='/youtube.png' alt='something'/></a>
        </div> 
        <p>Phone: (380)-900-1923 Email: yusenrocks@gmail.com</p>
    </div>
     
  );
};

export default Footer;