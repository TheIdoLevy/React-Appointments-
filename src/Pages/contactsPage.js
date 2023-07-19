import React from "react";
import { useState } from "react";
import { ContactsForm } from '../Components/contactsForm';
import { ContactsList } from "../Components/contactsList";


// Contacts page component renders the contacts form and the contacts list:
export function ContactsPage() {
    
    
    // Initiallized state 'contacts' as an array using the useState() hook
    const [contacts, setContacts] = useState([]);
    
    // Adds an object refering to a contact to the 'contacts' state 
    const addContact = (contactName,phone,email) => {
            setContacts(prev=>{
                return [{name:contactName,phone:phone,email:email}, ...prev]
            });
     };

    // Handles the submission of the contacts form
    const handleSubmit = e => {
        e.preventDefault();
        let contactName = e.target[0].value;
        let phone = e.target[1].value;
        let email = e.target[2].value;

        // Checks for duplicates in the 'contacts' state array. If the contact name 
        // that wes entered into the form already exists, the browser will alert the user
        // of this. Otherwise, the inputs of the contacts form are used as arguments in the
        // addContact() function call
        let duplicate;
        for(let contact of contacts){
            if(contact.name===contactName){
                duplicate = true;
                break;
            } else {
                duplicate = false;
            };
        };

       
        if(!duplicate){
            addContact(contactName, phone, email);
        } else {
            alert(`Contact name ${contactName} already exists`);
        };

    };



     return (
        <div>
            <section id="form">
                <h2>Contacts page</h2>
                <a href="/appointments">To Appointments</a>
                <ContactsForm addContact={addContact} handleSubmit={handleSubmit}/>
            </section>
            <section id="contacts">
                <ContactsList contacts={contacts}/>
            </section>
        </div>
    );
};
