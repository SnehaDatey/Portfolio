import React from 'react'
import './Form.css'
import resume from '../Resume/SnehaDatey.pdf'


const Form = () => {


  return (
    <div className='form'>
       <form>
        <div className='contactUs'>
        <label className='labelText'>Name : </label>  <label>Sneha Amit Datey</label>
        </div>

        <div className='contactUs'>
        <label className='labelText'>Email : </label>  <label>snehadatey@gmail.com</label>
        </div>

        <div className='contactUs'>
        <label className='labelText'>Contact No : </label>  <label>9970120289</label>
        </div>

        <div className='contactUs'>
        <label className='labelText'>LinkedIn : </label>  <label><a href="https://www.linkedin.com/in/sneha-datey-b40a7625">www.linkedin.com/in/sneha-datey-b40a7625</a></label>
        </div>

        <div className='contactUs'>
        <label className='labelText'>GitHub : </label>  <label><a href="https://github.com/SnehaDatey">https://github.com/SnehaDatey</a></label>
        </div>


        <div className='downloadResume'>
        <a href={resume} className=' downloadText' download='resume'>Download Resume</a>
        </div>

       


       </form>
    </div>
  )
}

export default Form;