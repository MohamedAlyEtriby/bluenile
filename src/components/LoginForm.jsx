import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "../Reducers/Reducers";
import { ClipLoader } from "react-spinners";
import { toast } from "react-hot-toast";
import { reduxpost } from "../helperfunction";
const LoginForm = ({ setregorsign }) => {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const [info, setinfo] = useState(false);
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });
  const setData = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const Loginto = (e) => {
    setloading(true);
    e.preventDefault();
    axios
      .post("https://blueboat.bluenileboat.com/api/login", formdata)
      .then((res) => {
        dispatch(Login(res.data.token));
        toast.success("Signed In Succefully", {
          duration: 3000,
          position: "top-center",
        });
      })
      .catch((err) => {
        setinfo(true);
        console.log(err.response.data);
      })
      .finally(() => {
        setloading(false);
      });
  };
  return (
    <Form className="Form" onSubmit={Loginto}>
      <h1 style={{ textAlign: "center" }} className="mb-5">
        Log in
      </h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={(e) => {
            setData(e);
            setinfo(false);
          }}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setData(e);
            setinfo(false);
          }}
          name="password"
          required
        />
      </Form.Group>
      {info && (
        <span style={{ color: "red", fontWeight: "600" }}>
          Invalid Information
        </span>
      )}
      <Button
        type="submit"
        className="m-2"
        style={{
          width: "100%",
          backgroundColor: `${loading ? "#4113a3" : "#5310e5"}`,
        }}
      >
        {loading ? <ClipLoader size={15} /> : "Sign In"}
      </Button>
      <p>
        Don't have an account?&nbsp;
        <span
          style={{ color: "#5310e5", cursor: "pointer" }}
          onClick={() => {
            setregorsign(false);
          }}
        >
          Register
        </span>
      </p>
    </Form>
  );
};

export default LoginForm;
