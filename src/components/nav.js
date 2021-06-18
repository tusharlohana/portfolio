import React from 'react';
import '../css/nav.css';
import { Link } from 'react-router-dom'
import {FaGithub,FaInstagram,FaLinkedinIn, FaWhatsapp } from "react-icons/fa"
import tushar from '../images/tushar.jpeg'


const Navcontent = () => {
    return (
        <>
            <nav>

                <div className="nav-img"><img src={tushar}></img></div>
                <h1>Tushar Lohana</h1>
                <h2>Web Developer</h2>
                <hr></hr>

                <section>
                    <Link to="/" >Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/project">my work</Link>
                    <Link to="/experience">experience</Link>
                    <Link to="/contact">contact me</Link>
                </section>
                <hr></hr>


                <div className="socicons" >
                    <Link to=""><FaGithub/></Link>
                    <Link to=""><FaLinkedinIn/></Link>
                    <Link to=""><FaWhatsapp/></Link>
                    <Link to=""><FaInstagram/></Link>
                </div>
                
            </nav>
        </>
    )
}

export default Navcontent
