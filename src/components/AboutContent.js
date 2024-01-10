import { Link } from 'react-router-dom';
import './AboutContent.css';

import React from 'react'

import React1 from '../assets/react.png';
import Js1 from '../assets/js.png';

const AboutContent = () => {
    return (
        <div className='about'>
            <div className='left'>
                <h1>Who Am I?</h1>
                <p>
                    Here's the translation of your statement into English:

                    "My name is Ivan, I'm 22 years old!
                    I've been programming for 1 year,
                    I am a JavaScript/React Front-End developer,
                    Infinitely motivated and ready for professional development!
                    My goals are: ТО BECOME THE BEST!"</p>

                    <Link to="/contact">
                        <button className='btn'>Contact</button>
                    </Link>
            </div>

            <div className='right'>
                <div className='img-container'>
                    <div className='img-stack top'>
                        <img src={React1} alt='react-png' className='img'/>
                    </div>
                    <div className='img-stack bottom'>
                        <img src={Js1} alt='js-png' className='img'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent;