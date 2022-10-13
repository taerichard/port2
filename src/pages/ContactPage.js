import React from "react";
import "./styles/contactPageStyles.css";
import ContactSection from "../components/work/Contact";
import { send } from "emailjs-com";

//service_32vtkct

// https://www.youtube.com/watch?v=aor9hlcODUE&ab_channel=EricMurphy
function ContactPage() {
  return (
    <div className="contactPage-container">
      <h1 className="contactPage-title">
        Contact me for any questions.
        <br /> What can I do for you?
      </h1>
      <form className="contactPage-form">
        <div className="form-nameEmail">
          <div className="name-container">
            <label className="nameLabel" for="name">
              Name
            </label>
            <input name="name" type="text" />
          </div>
          <div className="email-container">
            <label for="email">Email</label>
            <input name="email" type="text" />
          </div>
        </div>
        <div className="form-msgBtn">
          <label for="message">Message</label>
          <textarea name="message" type="text"></textarea>
          <button>Submit</button>
        </div>
      </form>
      {/* <ContactSection /> */}
    </div>
  );
}

export default ContactPage;
