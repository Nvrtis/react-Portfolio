import React from 'react'
import "./style.css"
import ContactInfo from "../ContactInfo/contactInfo"
import ContactForm from "../ContactForm/contactForm"

const Contact = ()=> (
    <div className="mainContainer">
    <h2 className="text-center">Contact</h2>
<div className="contact">
    <ContactForm/>
</div>
<h2 className="text-center">Contact Links</h2>
<div className="contact">
    <ContactInfo/>
</div>
</div>
    )
    

export default Contact
