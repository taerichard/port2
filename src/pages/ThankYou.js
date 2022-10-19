import React from "react";
import { useLocation } from "react-router-dom";
import "./styles/thankyouStyles.css";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import ContactSection from "../components/work/Contact";

const ThankYou = (props) => {
  const location = useLocation();
  console.log(`coming form thankyou component, ${location.state.toSend}`);
  return (
    <div className="thankyou-container">
      <div className="thankyou-block">
        <div>
          <div className="check-icon-container">
            <IoMdCheckmarkCircleOutline
              size="8em"
              color="darkgreen"
              className="check-icon"
            />
          </div>
          <p className="thankyou-message cap">
            Thank you {location.state.toSend}!
          </p>
          <p className="thankyou-message noCap">I will be in touch shortly.</p>
        </div>
      </div>
      {/* <ContactSection /> */}
    </div>
  );
};

export default ThankYou;
