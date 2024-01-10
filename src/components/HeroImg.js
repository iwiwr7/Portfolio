import './HeroImg.css';

import React from 'react'

import IntroImg from '../assets/1st.png';

import { Link } from 'react-router-dom';

const Heroimage = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='intro-img' src={IntroImg} alt='img' />
      </div>
      <div className='content'>
        <p> HI , I'M A FREELANCER. </p>
        <h1>JavaScript / React Developer.</h1>
        <div>

          <Link to="/about" className='btn'>
            About Me
          </Link>
          <Link to="/contact" className='btn btn-light'>
            Contact
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Heroimage;
