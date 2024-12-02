import './WorkCard.css';
import React from 'react'
//import { NavLink } from 'react-router-dom';

const WorkCard = (props) => {
    return (
        <div className='project-card'>
        <img src={props.imgsrc} alt="" height="200px" width="200px" />
        <h2 className="project-title">{props.title}</h2>
        <div clssName="pro-details">
            <p className='projectPara'>{props.text}</p>
            <div className="pro-btns">
                {/* <NavLink to={props.view} className="btn"> View </NavLink>
                <NavLink to="url.com" className="btn"> Source </NavLink> */}

                 {/* Use <a> for external links */}
                 <a href={props.view} className="btn" target="_blank" rel="noopener noreferrer"> View </a>
                    <a href={props.source} className="btn" target="_blank" rel="noopener noreferrer"> Source </a>


            </div>
        </div>
    </div>
    )
}
export default WorkCard;