import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm(
          "service_qcybaqv",
          "template_j78zte8",
          form.current,
          "PbhdVPJMIXUqhGT-x"
        )
        .then(
          (result) => {
            console.log(result.text);
            // Clear the form after a successful submission
            form.current.reset();
            // Display an alert when the email is sent successfully
            window.alert("Email sent successfully!");
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      // Display an alert if the form is incomplete
      window.alert("Please fill out all the fields before sending the email.");
    }
  };

  const validateForm = () => {
    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;

    return name.trim() !== "" && email.trim() !== "" && message.trim() !== "";
  };

  return (
    <div id="contact">
      <form id="form" ref={form} onSubmit={sendEmail}>
        <h2>Contact Me</h2>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input id="send" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
