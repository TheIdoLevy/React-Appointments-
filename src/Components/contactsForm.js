import React from "react";
import { useState } from "react";

// The ContactsForm component renders a form, with an onSubmit() value of 
// the handleSubmit() function that was passed in via props.
export function ContactsForm(props){
    return(
        <div id="form">
            <h1>Contacts Form</h1>
            <form onSubmit={props.handleSubmit} style={{borderBottom: '1px solid black',}}>
                <input type="text" placeholder="Your name:" required className="input"/><br/>
                <input type="text" placeHolder="Your phone number: (##########)" className="input" required/><br/>
                <input type="text" placeHolder="Your email address" className="input" required/><br/>
                <input type="submit" id="submit" className="input"/>
            </form>
        </div>
    )
}