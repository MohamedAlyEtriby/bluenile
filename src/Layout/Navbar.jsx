import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Image, NavLink } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { Fade } from "react-reveal";

function MyNavbar({ setcount, count }) {
  const arr = ["Home", "About", "Partitions", "Events", "Contact", "Account"];

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <Image src="/assets/bluenile.png" className="brandimage" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      </Container>
      <Container>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {arr.map((item, index) => {
              return (
                <div style={{margin:"10px 0px"}}>
                  <Link
                    key={index}
                    to={`/${index !== 0 ? item : ""}`}
                    style={{marginBottom:"20px",padding:"10px"}}
                    exact
                    activeClassName="active"
                    onClick={() => setcount(item)}
                    className={`${item === count ? "active" : ""} `}
                  >
                    <span
                      className={` ${item === "Account" ? "account" : ""} `}
                    >
                      {item}
                    </span>
                  </Link>
                </div>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
