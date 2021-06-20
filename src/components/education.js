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
                <div className="row justify-content-center" >
                    <Cards className="col-md-6" title="mca"
                        year="2019-2021"
                        school=" medi-caps university."
                        city="indore."
                    />

                    <Cards className="col-md-6" title="bcs(cs)"
                        year="2015-2018"
                        school=" indore indira school of career."
                        city="indore."

                    />
                </div>
                <div className="row justify-content-center ">
                    <Cards className="col-md-6" title="12th"
                        year="2014-2015"
                        school=" sunrise h.s school."
                        city="timarni."

                    />

                    <Cards className="col-md-6" title="10th"
                        year="2012-2013"
                        school=" sunrise h.s school."
                        city="timarni."

                    />

                </div>
            </div>
            <div className="container  ">
                <div class="section-heading">
                    <h2>Qualifications</h2>
                    <div class="line-dec"></div>
                    <span>hope you like it. &#x1F60D;</span>
                </div>
                <div className="row justify-content-center" >
                    <Cards className="col-md-6" title="mca"
                        year="2019-2021"
                        school=" medi-caps university."
                        city="indore."
                    />

                    <Cards className="col-md-6" title="bcs(cs)"
                        year="2015-2018"
                        school=" indore indira school of career."
                        city="indore."

                    />
                </div>
                <div className="row justify-content-center ">
                    <Cards className="col-md-6" title="12th"
                        year="2014-2015"
                        school=" sunrise h.s school."
                        city="timarni."

                    />

                    <Cards className="col-md-6" title="10th"
                        year="2012-2013"
                        school=" sunrise h.s school."
                        city="timarni."

                    />

                </div>
            </div>
        </div>
    )
}

export default education
