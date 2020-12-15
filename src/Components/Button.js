import React from 'react'
import buttonstyle from './button.module.css'

const Button = () => {
    return (
        <div>
          <button className={buttonstyle.btn}> <a href="https://drive.google.com/file/d/1Knmb4Bxcxifw1UqkCFVZr-Uv8zLTnTq4/view?usp=sharing">My Resume</a> </button>
        </div>
    )
}

export default Button
