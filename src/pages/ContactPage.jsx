import React from "react";
import ContactUs from "../components/ContactUs";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect } from "react";

const ContactPage = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <Container>
      <Row style={{display:"flex",justifyContent:"center"}}>
        <Col
          md={7}
          xs={12}
        >
          <ContactUs />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
