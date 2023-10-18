import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";

const ChangePassword = () => {
  const { token } = useSelector((state) => state.auth);
  const [loading, setloading] = useState(false);

  const [passinfo, setpassinfo] = useState({
    old_password: "",
    password: "",
    confirm_password: "",
  });
  const updateData = (e) => {
    setloading(true);
    e.preventDefault();
    axios
      .post("https://blueboat.bluenileboat.com/api/change-password", passinfo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Password Changed", {
          duration: 3000,
          position: "top-center",
        });
      })
      .catch((err) => {
        if (err.response.data.msg) {
          toast.error("Old Password wrong", {
            duration: 3000,
            position: "top-center",
          });
        }
        if (err.response.data.message) {
          toast.error("Password do not match", {
            duration: 3000,
            position: "top-center",
          });
        }
        
      }).finally(() => {
        setloading(false);
      });
  };
  const putData = (e) => {
    setpassinfo({ ...passinfo, [e.target.name]: e.target.value });
  };
  return (
    <Form onSubmit={(e) => updateData(e)}>
      <h1>Change Password</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="password"
          placeholder="Enter old password"
          onChange={(e) => putData(e)}
          name="old_password"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="password"
          placeholder="Enter New password"
          onChange={(e) => putData(e)}
          name="password"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="password"
          placeholder="Confirm new password"
          onChange={(e) => putData(e)}
          name="confirm_password"
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="w-100">
      {loading ? <ClipLoader size={15} /> : "Change Password"}

      </Button>
    </Form>
  );
};

export default ChangePassword;
