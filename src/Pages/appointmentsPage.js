import React from "react";
import { useState } from "react";
import { AppointmentsForm } from "../Components/appointmentsForm";
import { Link } from "react-router-dom";

// Rebders the Appointments page
export function AppointmentsPage(){
    
    // Initiallize appointments state as an array
    const [appointments, setAppointments] = useState([]);

    // Function for adding an appointment to the appointments array
    const addAppointment = (title, date, time) => {
        setAppointments(prev=>{
            return [{title:title, date:date, time:time}, ...prev];
        });
    };

    // Handles submission of the Appointments form
    const handleSubmit = e => {
        e.preventDefault();
        let title = e.target[0].value;
        let date = e.target[1].value;
        let time = e.target[2].value;
        addAppointment(title, date, time);
    };


    return(
    <div>
        <nav>
        <h2>Appointments page</h2>
        <a href="/contacts">Contacts Page</a>
        </nav>
        <AppointmentsForm handleSubmit={handleSubmit} appointments={appointments}/>
    </div>
    )
};
