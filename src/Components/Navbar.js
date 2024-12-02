import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import {FaBars, FaTimes} from "react-icons/fa"

export const Navbar = () => {

    const[click, setClick] = useState(false);
    const handleClick =()=> setClick(!click);
    const[color, setColor] = useState(false);

    const changeColor = () => {
      if(window.scrollY >= 100){
        setColor(true);
      }else{
        setColor(false);
      }
    }

window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "HeaderClass HeaderClass-bg" : "HeaderClass"}>
        <Link to="/" ><h1>Portfolio</h1></Link>
        <ul className={ click ? 'Nav-menu active' : 'Nav-menu' }>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/project">Project</Link></li>
            <li><Link to="/contact">Contact</Link></li>

        </ul>
        <div className='humburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color:"aliceblue"}}/>) : (<FaBars size={20} style={{color:"aliceblue"}}/>) }
            
            

        </div>
        </div>
  )
}

export default Navbar
