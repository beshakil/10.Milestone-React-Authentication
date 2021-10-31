import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'
import footerImg from '../../../images/download.jpg'

const Footer = () => {
    const mapMarker = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const envelope = <FontAwesomeIcon icon={faEnvelope} />
    const arrow = <FontAwesomeIcon icon={faCaretRight} />
    return (
        <div className=' footer'>
            <div className=" container row footer-style">
                <div className="col-md-3">
                    <div className="footer-cont">
                        <h1> Classic Medical</h1>
                        <div className="address pe-4">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quia laudantium labore iure inventore.</p>
                            <p>{mapMarker} 123 West Street, Melbourne Victoria 2000 Australia</p>
                            <p>{envelope} www.devitems@gmail.com Fax:+ (123) 123 321 345</p>
                        </div>
                    </div>

                </div>
                <div className="col-md-3">
                    <div className="footer-cont">
                        <h1>Latest News</h1>
                        <div className="footer-news">
                            <div className="address">
                                <div className='news-1'>
                                    <img className='pe-2' src={footerImg} alt="" />
                                    <small>Know About Our Class</small>
                                </div>
                                <div className='news-2'>
                                    <img className='pe-2' src={footerImg} alt="" />
                                    <small>Know About Our Class</small>
                                </div>
                                <div className='news-3'>
                                    <img className='pe-2' src={footerImg} alt="" />
                                    <small>Know About Our Class</small>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="footer-cont">
                        <h1>Our Courses</h1>
                        <div className="address">
                            <p>{arrow} Diabetes And Endocrinology</p>
                            <p>{arrow} Laryngological</p>
                            <p>{arrow} Ophthalmology</p>
                            <p>{arrow} Pediatric Clinic</p>
                            <p>{arrow} Output Rehabilitation</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="footer-cont">
                        <h1>Subscribe</h1>
                        <div className="address">
                            <input type="text" placeholder='@example.gmail.com' /> <br />
                            <button className='btn-regular mt-3'>Send</button>
                            <div className="icons">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;