import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Doctors.css";

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(()=>{
        fetch('./doctors.json')
        .then(res=>res.json())
        .then(data => setDoctors(data));
    },[])
    return (
        <div className="doctors">
            <span>Doctors</span>
            <h1>MediWise Specialist</h1>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 doctors__container">
                {
                    doctors.map(doctor=>
                        <div className="doctor" key={doctor.name}>
                            <div>
                            <img src={doctor.img} alt="" />
                            </div>
                            <div className="p-5">
                                <h2>{doctor.name}</h2>
                                <span>{doctor.specialist}</span> <br />
                                <Link to="/appointment">
                                    <button className="btn__regular">Get Appointed</button>
                                </Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Doctors;