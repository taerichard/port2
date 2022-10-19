import React, { useState } from "react";
import "./styles/contactPageStyles.css";
import ContactSection from "../components/work/Contact";
import { send } from "emailjs-com";
import { NavLink, useNavigate } from "react-router-dom";
import { GrContact } from "react-icons/gr";

//service_32vtkct

// https://www.youtube.com/watch?v=aor9hlcODUE&ab_channel=EricMurphy
function ContactPage() {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
    from_email: "",
  });

  let navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_32vtkct", "template_5hbrrwb", toSend, "JhOgiaEdWfT0fpG2Q")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        return navigate("/thankyou", { state: { toSend: toSend.from_name } });
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="contactPage-container">
      <GrContact size="8em" className="contact-icon" />
      <h1 className="contactPage-title">
        Contact me for any questions.
        <br /> What can I do for you?
      </h1>

      <form className="contactPage-form" onSubmit={onSubmit}>
        <div className="form-nameEmail">
          <div className="name-container">
            <label className="nameLabel" for="name">
              Name
            </label>
            <input
              name="from_name"
              type="text"
              value={toSend.from_name}
              onChange={handleChange}
            />
          </div>
          <div className="email-container">
            <label for="email">Email</label>
            <input
              name="from_email"
              type="text"
              value={toSend.from_email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-msgBtn">
          <label for="message">Message</label>
          <textarea
            name="message"
            type="text"
            value={toSend.message}
            onChange={handleChange}
          ></textarea>
          <button className="contact-button">Submit</button>
        </div>
      </form>
      {/* <ContactSection /> */}
    </div>
  );
}

export default ContactPage;
