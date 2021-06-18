import React from 'react'
import { Carousel } from 'react-bootstrap'
import corosal1 from "../images/corosal1.png"
import corosal2 from "../images/corosal2.jpg"
import corosal3 from "../images/corosal3.jpg"
import '../css/introduction.css'

const introduction = () => {
    return (
        <div className="main">
            <div className="container">
                <Carousel fade className="corosal" >
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={corosal3}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={corosal2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={corosal1}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

        </div>
    )
}

export default introduction
