import React from 'react';
import '../CSS/Contact.css';

const ContactPage = () => {
    return (
        <div className="contact-page">
            <h1>Contact Us</h1>
            <p>Got a question, comment, or suggestion? We'd love to hear from you!</p>
            <p>You can reach out to us using any of the following methods:</p>
            <ul>
                <li>Email: <a href="mailto:info@kidshop.com">info@kidshop.com</a></li>
                <li>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></li>
                <li>Address: 123 KidShop Street, Cityville, Country</li>
            </ul>
            <p>We typically respond to inquiries within 24-48 hours. Your feedback is important to us!</p>
        </div>
    );
};

export default ContactPage;
