import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    // const {service} = props;
    const { key, img, title, description, price } = service;
    return (
        <div className="col-lg-4 col-sm-6 col-12 pb-5 gx-5">
            <div className="service pb-3">
                <div className="pt-2">
                    <img className="image img-fluid" src={img} alt="" />
                    <h5 className="pt-2" >{title}</h5>
                    <h5>Price: {price}</h5>
                    <p className="px-3">{description}</p>
                    <Link to={`/booking/${key}`}>
                        <button className="btn btn-warning">Book {title.toLowerCase()}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;











