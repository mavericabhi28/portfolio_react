import React from 'react'
import buttonstyle from '../Components/button.module.css'
import aboutstyle from './about.module.css'



const Contact = () => {
    return (
        <div>
            <div className={aboutstyle.im}></div>
            {/* <p1>gmail id: abhimish3115@gmail.com </p1> */} 
            <button className={buttonstyle.btn}> <a href="https://www.linkedin.com/in/abhishek-mishra-0902ba171">My LinkedIn Profile</a> </button>   
            <button className={buttonstyle.btn}> <a href="https://github.com/mavericabhi">My Github Profile</a> </button>
            <button className={buttonstyle.btn}> <a href="https://www.instagram.com/abhi_mish3107/">My Instagram Handle</a> </button>
        </div>
    )
}


export default Contact
