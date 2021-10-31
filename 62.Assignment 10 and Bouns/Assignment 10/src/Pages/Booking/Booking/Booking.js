import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Booking.css'

const Booking = () => {
    const { serviceKey } = useParams()
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    const detailService = service.find(details => details.key == serviceKey)
    console.log(detailService);

    return (
        <div className="pt-3 container">
            <div className="row mt-5 service p-5 mb-5 mt-5">
                <div className="col-lg-6">
                    <h5 className="pt-2" >{detailService?.title}</h5>
                    <h5>Price: {detailService?.price}</h5>
                    <p className="px-3">{detailService?.description}</p>
                    <HashLink to="/home#services">
                        <button className="btn btn-warning">See All Services</button>
                    </HashLink>
                </div>
                <div className="col-lg-6">
                    <img className="image" src={detailService?.img} alt="" />
                </div>
            </div>

        </div>

    );
};

export default Booking;
