import React from 'react';
import './ContactUs.css';
import contactImage from '../assets/contact.webp';

const ContactUs = () => {
    return (
        <div className="contact-container">
            <form action="https://api.web3forms.com/submit" method="POST" className="contact-left">
                <div className="contact-left-title">
                    <h2>Get in touch</h2>
                    <hr />
                </div>
                <input type="hidden" name="access_key" value="012f679f-0ed8-4d89-9e59-87a226fa579c" />
                <input type="text" name="name" placeholder="Your Name" className="contact-inputs" required />
                <input type="text" name="email" placeholder="Your Email" className="contact-inputs" required />
                <input type="number" name="phone_number" placeholder="Your Ph. Number" className="contact-inputs" required />
                <textarea name="message" placeholder="Your message" className="contact-inputs" required></textarea>
                <button type="submit">Submit</button>
            </form>
            <div className="contact-right">
                <img src={contactImage} alt="Contact"/>
            </div>
        </div>
    );
};

export default ContactUs;
