import React from 'react'
import '../css/about.css';
import Button from './button';
import illus from '../images/abtillus.png'

const about = () => {
    return (
        <div className="main">
            <div className="container  ">
                <div class="section-heading">
                    <h2>About Me</h2>
                    <div class="line-dec"></div>
                    <span>Developer form outside, designer from inside. &#x1F60D;</span>
                </div>

                <div className=" content-main ">
                    <img src={illus} ></img>
                    <div className="content">
                        <h2>Hi..</h2>
                        <p>I'm a front-End Web designer & developer with working experience in several projects. 
                        My focus is to grow mutually with companies, startups, and individuals increase their 
                        visibility through web applications while making them mobile responsive as well. 
                        <br></br>I worked with avalanche infotech Pvt. Ltd. and as a React.js developer with Indvibe infotech Pvt.
                        ltd Now working as jr. software developer (front-end) with ADDA247
                        </p>
                        <Button value="Get Resume" ></Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default about
