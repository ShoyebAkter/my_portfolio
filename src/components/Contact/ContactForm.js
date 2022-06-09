import React, { useState } from 'react';
import './ContactForm.css'
import emailjs from '@emailjs/browser';

const Result =()=>{
    return(
        <p>Your message has been successfully sent.I will contact you soon.</p>
    )
}

const ContactForm = () => {
    const[result,setResult]=useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_dhln51h', 'template_czqmg0b',e.target, 'BTrXVDBsup09nfZ9j')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          setResult(true);
      };

      setTimeout(()=>{
          setResult(false);
      },5000)

    return (
            
                    
            <div className="container">
                <form id="contact" onSubmit={sendEmail}>
                    <h3>Contact Form</h3>
                    <h4>Send your message</h4>
                    <input placeholder="Your name" type="text" name="fullName"  required/>
                    
                    <fieldset>
                        <input placeholder="Your Email Address" type="email" name="email"  required/>
                    </fieldset>
                    <fieldset>
                        <input placeholder="Your Phone Number (optional)" type="text" name='phone'  required/>
                    </fieldset>
                    <fieldset>
                        <textarea placeholder="Type your message here...."  name='message' required></textarea>
                    </fieldset>
                    <fieldset>
                        <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                    </fieldset>

                     <div>{result ? <Result/> : null}</div>
                 </form>
            </div>  
       
    );
};

export default ContactForm;