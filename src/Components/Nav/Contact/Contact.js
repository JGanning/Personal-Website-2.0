import React from "react";
import * as cont from "./Constants";

export const Contact = () => {
  return (
    <div className="contact">
      <h4>Contact</h4>
      <ul>
        <li>Phone: {cont.PHONE_NUMBER}</li>
        <li>Email: {cont.EMAIL}</li>
      </ul>
    </div>
  );
};

export default Contact;
