import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { ClipLoader } from "react-spinners";
const Register = ({ setregorsign }) => {
  const [password, setpassword] = useState(false);
  const [password2, setpassword2] = useState(false);
  const [mobileErr, setMobile] = useState("");
  const [checkbox, setcheckbox] = useState();
  const [EmailErr, setEmail] = useState("");
  const [theForm, setTheForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: 0,
    social_link: "",
    password: "",
    confirm_password: "",
  });
  const [loading, setloading] = useState(false);
  const oncheckbox = (e) => {
    setcheckbox(e.target.checked);
  };
  const changedata = (e) => {
    setTheForm({ ...theForm, [e.target.name]: e.target.value });
  };
  const sendData = (e) => {
    setloading(true);
    e.preventDefault();
    axios
      .post("https://blueboat.bluenileboat.com/api/create-account", theForm)
      .then((res) => {
        console.log(res);
        setEmail("");
        setMobile("");
        toast.success("Account Created Successfully", {
          duration: 3000,
          position: "top-center",
        });
      })
      .catch((err) => {
        const errors = Object.keys(err.response.data.errors).join("");
        if (errors.includes("email")) {
          setEmail(err.response.data.errors.email[0]);
        }
        if (errors.includes("mobile")) {
          setMobile(err.response.data.errors.mobile[0]);
        }
        if (!errors.includes("mobile")) {
          setMobile("");
        }
        if (!errors.includes("email")) {
          setEmail("");
        }
        // if (err.response.data.errors.password[0]!==undefined ) {
        //   toast.error("Passwords Not Matched", {
        //     duration: 3000,
        //     position: "top-center",
        //   });
        //}
      })
      .finally(() => {
        setloading(false);
      });
  };
  return (
    <Row>
      <Col md={6} xs={12} className="flex2">
        <h1>Sign Up here !</h1>
        <p>
          We are happy to have you with us, just fill the form on the right side
          and create your account on our website and access special member
          benefites
        </p>
      </Col>
      <Col md={6} xs={12}>
        <Form className="Form" onSubmit={(e) => sendData(e)}>
          <h1 style={{ textAlign: "center" }}>Register</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Enter Your First name"
              onChange={(e) => changedata(e)}
              name="first_name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              name="last_name"
              type="text"
              placeholder="Enter Your Last name"
              onChange={(e) => changedata(e)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter Your Email"
              onChange={(e) => changedata(e)}
              name="email"
              required
            />
            {EmailErr ? <span style={{ color: "red" }}>{EmailErr}</span> : ""}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="number"
              name="mobile"
              placeholder="Enter Your Mobile number"
              onChange={(e) => changedata(e)}
              required
            />
            {mobileErr ? <span style={{ color: "red" }}>{mobileErr}</span> : ""}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Enter your links"
              onChange={(e) => changedata(e)}
              name="social_link"
              required
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            style={{ position: "relative" }}
          >
            <Form.Control
              type={`${password ? "text" : "password"}`}
              placeholder="Enter password"
              onChange={(e) => changedata(e)}
              name="password"
              required
            />
            {!password ? (
              <BsFillEyeFill
                size={19}
                style={{ color: "black" }}
                className="password"
                onClick={() => {
                  setpassword(true);
                }}
              />
            ) : (
              <BsFillEyeSlashFill
                size={19}
                style={{ color: "black" }}
                className="password"
                onClick={() => {
                  setpassword(false);
                }}
              />
            )}
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            style={{ position: "relative" }}
          >
            <Form.Control
              type={`${password2 ? "text" : "password"}`}
              placeholder="Confirm password"
              onChange={(e) => changedata(e)}
              name="confirm_password"
              required
            />
            {!password2 ? (
              <BsFillEyeFill
                size={19}
                style={{ color: "black" }}
                className="password"
                onClick={() => {
                  setpassword2(true);
                }}
              />
            ) : (
              <BsFillEyeSlashFill
                size={19}
                style={{ color: "black" }}
                className="password"
                onClick={() => {
                  setpassword2(false);
                }}
              />
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Check
              type="checkbox"
              id="myCheckbox"
              label="Confirm our policy to sign in"
              onChange={(e) => oncheckbox(e)}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="w-100"
            disabled={checkbox ? false : true}
          >
            {loading ? <ClipLoader size={15} /> : "Sign In"}
          </Button>
          <p>
            Already Have an account? &nbsp;
            <span
              style={{ color: "#5310e5", cursor: "pointer" }}
              onClick={() => setregorsign(true)}
            >
              Sign In
            </span>
          </p>
        </Form>
      </Col>
    </Row>
  );
};

export default Register;
