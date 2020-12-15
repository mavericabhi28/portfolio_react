import React from 'react'
import headingstyle from './heading.module.css'
import Button from './Button.js'

const Heading = () => {
    return (
        <div className={headingstyle.container}>
            <h1 className={headingstyle.heading}>Hey there!</h1>
            <h2 className={headingstyle.about}>My name is <span className={headingstyle.name}>Abhishek Mishra</span> <br/> and i am a full stack<br/> Developer,  Actively Looking for a <br/>  Job in Software Developement</h2>
        <Button />
        </div>
    )
}

export default Heading
