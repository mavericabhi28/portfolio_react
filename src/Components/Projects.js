import React from 'react'
import projectstyle from './projects.module.css'
import buttonstyle from './button.module.css'

const Projects = () => {
    return (
        <div className={projectstyle.container}>
            <h1 className={projectstyle.heading}>
                My Recent Projects Are 
            </h1>
            <ul className={projectstyle.ul}>
                <li className={projectstyle.li}>
                <h2>E-Commerce Website</h2>
                    <p>It is a well designed Website with the facility of Shopping Cart and User review,Customer first login to the website then buy product if not can add it in Shopping Cart</p>
                    <button className={buttonstyle.btn}> <a href="https://github.com/mavericabhi/E-Commerce-Backend-">Github link</a> </button>
                </li>
                <li className={projectstyle.li}>
                <h2>Scribble Game Using Socket.io</h2>
                    <p>A game in which Two players can play one has draw on there canvas and another one has to guess the drawing,live chat is available and live host screen will be visible,technology used is Socket.io and P5 package of Node js </p>
                </li>
                <li className={projectstyle.li}> 
                <h3>Agro Facillitation App</h3>
                    <p>It is farmer friendly website in which we use Dark sky API to fetch the weather Information and later we use this information and compare this information with informaion provided in official farmer website farmer.gov.in and give farmer the advice what he has to do with his crop</p>
                </li>
            </ul>
        </div>
    )
}

export default Projects
