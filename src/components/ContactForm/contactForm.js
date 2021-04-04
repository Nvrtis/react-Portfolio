import React, { useState }from 'react'
import "./style.css"
import emailjs, { init } from "emailjs-com"

const ContactForm = ()=> {  

    const emailto = (e) => {
        e.preventDefault()
        emailjs.init(process.env.REACT_APP_USER_key);
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_key)
        .then(function() {
            console.log('SUCCESS!');
        }, function(error) {
            console.log('FAILED...', error);
        });
        // location.href(`mailto:nvav91@gmail.com?cc=${e.target[1].value}&subject=from%website%${e.target[0].value.replace(/\s/g, '%')}body=${e.target[2].value}`);
        
    }
    console.log(process.env.REACT_APP_TOKEN)
    console.log(process.env.REACT_APP_TEMPLATE_ID)
    console.log(process.env.REACT_APP_SERVICE_ID)
init()

 return (
 <form 
 onSubmit={emailto}>
    <div className="form-name">
      <label htmlFor="Name">Name</label>
      <input 
      type="subject" 
      className="form-control" 
      name="name" 
      placeholder="First name"/>
    </div>
    <div className="form-group" id="email">
      <label htmlFor="exampleInputEmail1">Email address</label>
      <input 
      type="email" 
      className="form-control"
       name="name" id="exampleInputEmail1" aria-describedby="emailHelp"
        placeholder="John.doe@hotmail.com"/>
    </div>
    <div className="form-group">
      <label htmlFor="exampleFormControlTextarea1">Message</label>
      <textarea 
      className="form-control" 
      name="message" 
      size="350" 
      id="exampleFormControlTextarea1" 
      rows="3"></textarea>
    </div>
    <button type="submit" className="btn submitbtn btn-primary" >Submit</button>
  </form>
 )   
}
    

export default ContactForm








