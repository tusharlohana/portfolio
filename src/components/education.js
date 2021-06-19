import React from 'react'
import '../css/education.css'
import { Cards } from './card'

const education = () => {
    return (
        <div className="main">
            <div className="container  ">
                <div class="section-heading">
                    <h2>Qualifications</h2>
                    <div class="line-dec"></div>
                    <span>hope you like it. &#x1F60D;</span>
                </div>

            <Cards title="mac"
                year="2019-2021"
                school=" medi-caps university, indore."
            />
                   
            </div>
        </div>
    )
}

export default education
