import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./Service.css";

const Service = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState([]);
    const [filtered, setFiltered] = useState({});
    // load service data
    useEffect(()=>{
        fetch('/services.json')
        .then(res=> res.json())
        .then(data=>setService(data));
    },[])
    // find specific service via id
    useEffect(()=>{
        setFiltered(service.find(item => item.id === parseInt(serviceId)))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[service]);

    return (
        <div className="service__container text-center">
            <div className="service__img">
                <img src={filtered?.img} alt="" />
            </div>
            <h1>{filtered?.name}</h1>
            <p>{filtered?.description}</p>
        </div>
    );
};

export default Service;