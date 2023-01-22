import React from "react";

// AppointmentsList component renders the appointments (which are passed in)
// via props from the AppointmentsPage component
export function AppointmentsList(props){
    return(
        <div>
            {
            props.appointments.map(appointment=>{
                return <ul id={appointment.title}>
                    {console.log(appointment.title)}
                    <p className="x">{'\u2715'}</p>
                    <p>{appointment.title}</p>
                    <p>{appointment.date}</p>
                    <p>{appointment.time}</p>
                </ul>
            })
            }
        </div>
    );
};