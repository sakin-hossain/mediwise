import React from 'react';
import "./Appointment.css";

const Appointment = () => {
    return (
        <div className="appointment__container py-10">
            {/* appointment form */}
            <div className="container">
            <form>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="name" name="name" placeholder="Your name.."/>

                <label htmlFor="number">Mobile No.</label>
                <input type="number" id="number" name="number" placeholder="Your Mobile No.."/>

                <label htmlFor="specialist">Specialist Name</label>
                <select id="specialist" name="specialist">
                <option value="jolian">Dr. Jolian Acenj</option>
                <option value="arnica">Dr. Arnica Sarah</option>
                <option value="rolien">Dr. Rolien Adam</option>
                <option value="triben">Dr. Triben Dina</option>
                <option value="alena">Dr. Alena Malic</option>
                <option value="malina">Dr. Malina Angel</option>
                </select>

                <input type="date" name="date" id="date" />

                <input type="submit" value="Submit"/>
            </form>
            </div>
        </div>
    );
};

export default Appointment;