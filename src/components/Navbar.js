import React, { useState } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';



const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);


    // usestate za smqna na backgorunda pri scroll 


    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);





    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/" >
                <h1>Portfolio</h1>
            </Link>
            {/* ako e kliknato pokaji nav menuto ako ne e go skrii i pokaji samo ikonata za menu */}
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/project">Project</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {/* ako e "?" clicknato padashtoto menu da se pokazwa hiks za zatwarqne ako ne e ":" da se pokazwa menu ikonka */}
                {click ? (<FaTimes size={20} style={{ color: '#fff' }} />) : (<FaBars size={20} style={{ color: '#fff' }} />)}


            </div>
        </div>
    )
}

export default Navbar;