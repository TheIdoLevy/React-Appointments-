import React from "react";

// The ContactList component renders all contacts using the
// contacts array that was passed in from the ContactsPage component
// usong props
export function ContactsList(props){
    return (
        <div className="contact">
           {
           props.contacts.map(contact=>{
            return <ul>
                <li>{contact.name}</li>
                <li>{contact.phone}</li>
                <li>{contact.email}</li>
            </ul>
           })
           }
        </div>
    );
};