import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import emailjs from "emailjs-com";
const ContactUs = () => {
  function sendEmail(e) {
    e.preventDefault();
    const templateParams = {
      to_name: "Recipient Name",
      from_name: "Klay",
      message: "This is a test email sent using emailjs.",
    };

    emailjs
      .send(
        "service_y09y6ek",
        "template_ytkjj7e",
        templateParams,
        "54MgSTcl0UCQQdCUn"
      )
      .then((response) => {
        console.log("Email sent:", response.status, response.text);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  }
  return (
    <div style={{ width: "100%" }} className="contact">
      <h1>Contact Us</h1>
      <Form onSubmit={(e) => sendEmail(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="number" placeholder="Enter Phone Number" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Message</Form.Label>
          <FormControl as="textarea" placeholder="Enter your message here" />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactUs;
