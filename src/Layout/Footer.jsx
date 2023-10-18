import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdOutlineTimer } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
const Footer = ({ count, setcount }) => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col md={4} xs={12}>
            <div className="mt-5">
              <div className="mb-2">
                <img src="/assets/Hospitality.png" alt="" />
              </div>
              <div>
                <p>
                  international Group for Development and Investment should be
                  your first choice due to a well-deserved record of honesty,
                  professionalism, experience, innovation, flexibility, customer
                  service and the most importantly is the actual results
                </p>
              </div>
            </div>
          </Col>
          <Col md={2} xs={12} className="mt-5">
            <h1>Outlets</h1>
            <ul>
              <li>
                <Link>TEMPO</Link>
              </li>
              <li>
                <Link>ME BAR</Link>
              </li>{" "}
              <li>
                <Link>HUNGRY BOAT</Link>
              </li>{" "}
              <li>
                <Link>ANAPOS</Link>
              </li>
            </ul>
          </Col>
          <Col md={2} xs={12} className="mt-5">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <Link to="/" onClick={() => setcount("Home")}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/About" onClick={() => setcount("About")}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/Partitions" onClick={() => setcount("Partitions")}>
                  Partitions
                </Link>
              </li>{" "}
              <li>
                <Link to="/Events" onClick={() => setcount("Events")}>
                  Events
                </Link>
              </li>{" "}
              <li>
                <Link to="/Contact" onClick={() => setcount("Contact")}>
                  Contact Us
                </Link>
              </li>{" "}
              <li>
                <Link to="/Account" onClick={() => setcount("Account")}>
                  Account
                </Link>
              </li>{" "}
              <li>
                <Link to="">Terms & Conditions</Link>
              </li>{" "}
              <li>
                <Link to="">Privacy & Policy</Link>
              </li>
            </ul>
          </Col>
          <Col md={4} xs={12} className="px-1 mt-5">
            <h2>Company Info</h2>
            <ul>
              <li className="mb-2 flex1">
                <MdOutlineTimer className="mx-1" size={23} />
                <Link to="">Sunday - Saturday 10.00 AM - 12.00 AM</Link>
              </li>
              <li className="mb-2 flex1">
                <BsTelephone className="mx-1" size={23} />
                <Link to="">1278500050</Link>
              </li>{" "}
              <li className="mb-2 flex1">
                <FiMail className="mx-1" size={23} />
                <Link to="">info@bluenileboat.com</Link>
              </li>{" "}
              <li className="flex1">
                <GoLocation className="mx-1" size={23} />
                <Link to=""> Maadi 2, Giza St, Cairo Governorate 11728</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
