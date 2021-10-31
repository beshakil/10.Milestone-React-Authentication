import React from 'react';
import headerImg from '../../../images/header-bg.17ceb6e2.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className="header pt-5">
            <div className="row">
                <div className="col-md-8 pe-5">
                    <div className="header-text">
                        <div className="header-details">
                            <h3>Well come To Classic Medical Institute</h3>
                            <h1>Classic Medical Is Best In Medical</h1>
                            <p className="ps-5 pe-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid et fuga excepturi temporibus vitae laborum, molestias asperiores repudiandae nihil porro.</p>
                            <button className='btn-regular'>Read More</button>
                        </div>
                    </div>
                </div>
                <div className="ps-5 col-md-4 header-img">
                    <img className='' src={headerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;