import React from 'react';
import { Link } from 'react-router-dom';
import './contact.css';

const ContactPage = () => {
  return (
    <div className='content'>
      <h1>Contact Us</h1>

      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" />

       <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;
//  can style the contact form and page using CSS or a styling library of your choice to make it visually appealing.
// These steps provide a basic structure for creating a contact pagYoue in React. You can customize the form fields, add validation, handle form submission, and integrate it with a backend server based on your specific requirements.






