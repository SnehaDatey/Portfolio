import './HeroImg.css';
import React from 'react';
import bgImg from '../BGImg/bgImage.jpg';
import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className='Hero'>
        <div className='mask'>
            <img className='into-img' src={bgImg}  alt="backgroundImage" width="100%" height="550px"/>
        </div>


      
        <div className='content'>
            <p>Hi, I'm Sneha Datey</p>
            <h2>Frontend Developer</h2>

            <div className='linkClass'>
                <Link to="/project" className='btn'>Project</Link>
                <Link to="/contact" className='btn btn-light'>Contact</Link>

            </div>
        </div>
    </div>
  )
}

export default HeroImg;
