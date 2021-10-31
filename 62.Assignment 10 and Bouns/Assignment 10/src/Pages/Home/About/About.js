import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { faRecordVinyl } from '@fortawesome/free-solid-svg-icons'
import './About.css'
import aboutImg from '../../../images/About.e2370ec6.png'

const About = () => {
    const thumbsUp = <FontAwesomeIcon icon={faThumbsUp} />
    const glope = <FontAwesomeIcon icon={faGlobeEurope} />
    const triangle = <FontAwesomeIcon icon={faExclamationTriangle} />
    const round = <FontAwesomeIcon icon={faRecordVinyl} />

    return (
        <div className='mt-5 mb-5' id="about">
            <h1 className='text-center mb-2'>About <span className="span">Us</span></h1>
            <p className='text-center mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis earum qui fugit voluptates et fuga?</p>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="about">
                            <div className="about-text">
                                <h4>Why Choose Medlearn</h4>
                                <p className='text-Justify'>ullamco laboris nisi ut aliquip ex ea commodo cons equat. Du aute irure dolor in repreh enderit in voluptate velit esse cillumo eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat no proident, sunt in culpa qui officia dese aute irure dolor in</p>
                                <button className='btn-regular'>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="about-img ps-5">
                            <img className='' src={aboutImg} alt="" />
                        </div>
                    </div>
                    <div className="col-md-4 ps-5">

                        <div className="trust d-flex align-items-center">
                            <div className="trust-icon ">
                                <h1>{thumbsUp}</h1>
                            </div>
                            <div className="trust-text ps-3">
                                <h6>Trusted Over 10 Lakh Students</h6>
                                <p>The Name That People Trust</p>
                            </div>
                        </div>
                        <div className="trust d-flex align-items-center">
                            <div className="trust-icon ">
                                <h1>{round}</h1>
                            </div>
                            <div className="trust-text ps-3">
                                <h6>Instant Online Policy</h6>
                                <p>Host of discounts – No claim bonus, Discount</p>
                            </div>
                        </div>
                        <div className="trust d-flex align-items-center">
                            <div className="trust-icon ">
                                <h1>{glope}</h1>
                            </div>
                            <div className="trust-text ps-3">
                                <h6>Save Your Money</h6>
                                <p>Host of discounts – No claim bonus, Discount</p>
                            </div>
                        </div>
                        <div className="trust d-flex align-items-center">
                            <div className="trust-icon ">
                                <h1>{triangle}</h1>
                            </div>
                            <div className="trust-text ps-3">
                                <h6>Easy Claim</h6>
                                <p>Easy claim procedures with no hassle</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;