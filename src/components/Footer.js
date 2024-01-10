import React from 'react';
import './Footer.css';
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                        <div>
                            <p> Sofia City, </p>
                            <p> Bulgaria. </p>
                        </div>
                    </div>
                    <div className='phone'>

                        <h4>
                            <FaPhone size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                            +359 892 063 144
                        </h4>

                    </div>

                    <div className='email'>

                        <h4>
                            <FaMailBulk size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                            iwiwr7@gmail.com
                        </h4>

                    </div>
                </div>


                <div className='right'>
                    <h4> About Me: </h4>
                    <p>React and JavaScript developer.
                        Motivated and goal-oriented.
                        With a desire for growth and success
                        in the programming career!</p>
                    <div className='social'>

                        <FaFacebook size={30} style={{ color: '#fff', marginRight: '1rem' }} />

                        <FaInstagram size={30} style={{ color: '#fff', marginRight: '1rem' }} />

                        <FaLinkedin size={30} style={{ color: '#fff', marginRight: '1rem' }} />


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer