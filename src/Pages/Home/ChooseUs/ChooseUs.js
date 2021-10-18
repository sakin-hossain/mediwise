import React from 'react';
import "./ChooseUs.css";

const ChooseUs = () => {
    return (
        <div className="choose__us grid md:grid-cols-2 sm:grid-cols-1">
            <div>
                <img src="https://i.ibb.co/QFLRM0Y/bmc3zndq-1411073854.jpg" alt="" />
            </div>
            <div className="choose__us__container">
                <div>
                    <span className="text-left">Why Choose Us</span>
                    <h1>We Always Provide The Best <br /> Services</h1>
                    <h5>To be a renowned organization at the leading edge of Medicine, <br /> providing quality healthcare to meet our nation's aspirations.</h5>
                </div>
                <div className="grid gap-8 md:grid-cols-2 sm:grid-cols-1 ml-8">
                    <div>
                        <h2>Qualified Doctors</h2>
                        <p>SQUARE Hospital aims to provide the highest possible level of care by the qualified consultants from India, Singapore, USA, UK quality hospitals in the Middle East. </p>
                    </div>
                    <div>
                        <h2>Emergency Departments</h2>
                        <p>Emergency department became commonly used when emergency medicine was recognized as a medical specialty, and hospitals and medical centres developed departments.</p>
                    </div>
                    <div>
                        <h2>Excellent Services</h2>
                        <p>Clinical excellence must be the priority for any health care service provider. SQUARE Hospital ensures the best healthcare service comprise of professional.</p>
                    </div>
                    <div>
                        <h2>Great Infrastructure</h2>
                        <p>MediWise has 3 buildings on both sides of the Panthapath Main Road, connected by an over bridge. The hospital with more than 6 lac square feet.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;