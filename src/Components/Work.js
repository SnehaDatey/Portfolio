import './WorkCard.css';
import React from 'react'
import WorkCard from './WorkCard';
import WorkCardData from './WorkCardData';


const Work = () => {
    return (
        <div className='work-container'>
            <h1 className='project-heading'>Selected Projects </h1>
            <div className='project-container'>
                {WorkCardData.map((val,ind)=>{
                    return(
                        <WorkCard 
                        key={ind}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        text={val.text}
                        view={val.view}
                        source={val.source}
                        />

                    )
                })}

               
            </div>

                     <div className='projectText'> 
                    <p>Explore more of my ReactJS projects and contributions on my <a href="https://github.com/SnehaDatey/React">GitHub</a> account.
                     You'll find a variety of applications showcasing my expertise in ReactJS, JavaScript, 
                     and modern web development.</p>
                     </div>
           
        </div>
    )
}
export default Work;