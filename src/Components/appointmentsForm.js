import React from "react";
import {AppointmentsList} from './appointmentsList';


// Renders an appointment form.
// The form has an onSubmit value of the handleSubmit() function passed
// in via props from the Appointments Page component.
export function AppointmentsForm(props){
    return (
        <div>
            <form onSubmit={props.handleSubmit} style={{borderBottom:'1px solid black'}}>
                <input type="text" placeholder="title" className="input" required/>
                <input type="date" className="input" required/>
                <input type="time" className="input" required/>
                <input type="submit" id="submit" className="input"/>
            </form>
            <AppointmentsList appointments={props.appointments}/>
        </div>
    );
}