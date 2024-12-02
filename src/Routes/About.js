import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import HeroImg2 from '../Components/HeroImg2';
import AboutContact from '../Components/AboutContact';


const About = () => {
    return(
    <div>
         <Navbar />
         <HeroImg2 heading="About" text="" />
         <AboutContact />
            <Footer />
    </div>
    )

}

export default About