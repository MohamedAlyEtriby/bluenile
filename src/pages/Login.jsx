import React, { useState } from "react";
import BackGroundPages from "../components/BackGroundPages";
import { Col, Container, Row } from "react-bootstrap";
import LoginForm from "../components/LoginForm";
import { useSelector } from "react-redux";
import LoggedIn from "../components/LoggedIn";
import Register from "../components/Register";
import { useEffect } from "react";

const Login = () => {
  const { token } = useSelector((state) => state.auth);
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  console.log(token)
  const [regorsign, setregorsign] = useState(true);
  return (
    <div style={{ width: "100%", minHeight: "90vh" }} className="flex mt-5">
      <Container>
        {token ? (
          <Row>
            <LoggedIn />
          </Row>
        ) : regorsign ? (
          <Row>
            <Col xs={12} md={6} className="flex2">
              <h1>Welcome Back !</h1>
              <p>
                Sign in to your account using the form on the right side. Please
                feel free to reach us anytime if you have any issues signing
                into your account.
              </p>
            </Col>
            <Col xs={12} md={6}>
              <LoginForm setregorsign={setregorsign} />
            </Col>
          </Row>
        ) : (
          <Register setregorsign={setregorsign} />
        )}
      </Container>
    </div>
  );
};

export default Login;
