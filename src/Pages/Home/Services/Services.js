import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Services.css";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('./services.json')
        .then(res=> res.json())
        .then(data=>setServices(data));
    },[])
    return (
        <div className="services" id="services">
            <span>Services</span>
            <h1>MediWise Services</h1>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 service__item">
                {
                    services.map(service=>
                        <div className="grid md:grid-cols-2 sm:grid-cols-1 service m-10" key={service.id}>
                            <div>
                            <img src={service.img} alt="" />
                            </div>
                            <div>
                                <h4>{service.name}</h4>
                                <p>{service.description}</p>
                                <Link to ={`services/${service.id}`}>
                                    <button className="btn__regular">Get This...</button>
                                </Link>
                            </div>
                        </div>
                        )
                }
            </div>
        </div>
    );
};

export default Services;