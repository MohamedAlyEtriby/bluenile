import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <div>
            <p style={{ fontWeight: 700,fontSize:"20px" }}>
              International Group for Development and Investment Company (SAE)
              provides management services and solutions to the hospitality
              industry, all customized to suit the needs of our unique
              customers. As a company, our executive team combined has over 20
              years of experience in directing and overseeing the operation of
              hotels ranging from and including luxury assets, full-service
              hotels, limited service properties, extended stay products,
              independent hotels, resort conference centers and restaurants.
              This innovative approach is the basic philosophy of personal
              involvement in each partnership has led to the classification of
              assets International Group for Development and Investment
              consistently among the top independent directors in the
              hospitality and development industry. In addition, each
              International Group for Development and Investment executive has
              over 25 years of experience in the hospitality industry. that
              manages franchise and independent properties. This along with
              financial, executive, sales and marketing staff, will in turn
              assist you and your property with some of the best and most
              diverse experiences in the industry.
            </p>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div
            className="w-100 flex"
            
          >
            <img
              src="/assets/Aboutus.jpg"
              alt=""
              style={{ width: "70%", objectFit: "contain" }}
            />
          </div>
        </Col>
      </Row>
    </Container>
    // <div className=" ">
    //   <h2>Who We Are</h2>
    //   <div className="flex">
    // <div >
    //   <p>
    //     International Group for Development and Investment Company (SAE)
    //     provides management services and solutions to the hospitality
    //     industry, all customized to suit the needs of our unique customers.
    //     As a company, our executive team combined has over 20 years of
    //     experience in directing and overseeing the operation of hotels
    //     ranging from and including luxury assets, full-service hotels,
    //     limited service properties, extended stay products, independent
    //     hotels, resort conference centers and restaurants. This innovative
    //     approach is the basic philosophy of personal involvement in each
    //     partnership has led to the classification of assets International
    //     Group for Development and Investment consistently among the top
    //     independent directors in the hospitality and development industry.
    //     In addition, each International Group for Development and Investment
    //     executive has over 25 years of experience in the hospitality
    //     industry. that manages franchise and independent properties. This
    //     along with financial, executive, sales and marketing staff, will in
    //     turn assist you and your property with some of the best and most
    //     diverse experiences in the industry.
    //   </p>
    // </div>
    //     <img
    //       src="/assets/Aboutus.jpg"
    //       alt=""
    //       style={{ height: "300px", objectFit: "contain" }}
    //     />
    //   </div>
    // </div>
  );
};

export default AboutUs;
