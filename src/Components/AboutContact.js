import './AboutContact.css';
import React from 'react'
import { Link } from 'react-router-dom';
import img1 from '../BGImg/rec1.jfif';
import img2 from '../BGImg/rec2.jfif';
import TechStack from './TechStack';

const AboutContact = () => {
    return (
        <div className='about'>
            <div className='left'>
                <h1 className='aboutHeading'> Who Am I?</h1>


                <p className='aboutText'>Since beginning my journey as a <span className='boldText'>Web Developer</span>, 
                I've worked for <span className='boldText'>MRSAC Nagpur</span>, 
                <span className='boldText'>Technobase IT Solutions Pvt. Ltd</span> and 
                <span className='boldText'>E-Whiz IT Solutions Pvt Ltd.</span> with talented people to create websites and 
                software applications for both business and consumer use. I'm quietly confident, naturally curious, and 
                perpetually working on improving my chops one design problem at a time.</p>

                <h2 className='aboutHeading'>Tech Stack</h2>
                    <TechStack />

                <Link to="/contact">
                    <button className='btn-btn1'>CONTACT</button>
                </Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='img-stack top'>
                        <img src={img2} alt="true" className='img' />
                    </div>

                    <div className='img-stack bottom'>
                        <img src={img1} alt="true" className='img' />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default AboutContact