import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Logout } from "../Reducers/Reducers";
import { ClipLoader, MoonLoader } from "react-spinners";
import { Link } from "react-router-dom";
import ChangePassword from "./ChangePassword";
import EventTickets from "./EventTickets";
import Partition from "./Partition";
import PartitionTickets from "./PartitionTickets";
import { toast } from "react-hot-toast";
const LoggedIn = () => {
  const { token } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const [open, setopen] = useState(false);
  const [name, setname] = useState("");
  const [data, setdata] = useState({
    email: "",
    first_name: "",
    last_name: "",
    mobile: 0,
    social_link: "",
  });
  const [loading, setloading] = useState(false);
  const setTheData = () => {
    axios
      .get("https://blueboat.bluenileboat.com/api/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setdata({
          email: res.data?.email,
          first_name: res.data?.first_name,
          last_name: res.data?.last_name,
          mobile: res.data?.mobile,
          social_link: res.data?.social_link,
        });
        setname(res.data?.first_name);
        setopen(true);
        console.log("kareeeeeeeeeeeeeeeem");
      })
      .catch((err) =>{ 
        setopen(false)}
      
      );
  };
  const [mystate, setmystate] = useState("Acc");
  useEffect(() => {
    setTheData();
  }, [token]);
  const setformupdate = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  const updateProf = (e) => {
    setloading(true);
    e.preventDefault();
    axios
      .post("https://blueboat.bluenileboat.com/api/user-update-profile", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Updated Successfully", {
          duration: 3000,
          position: "top-center",
        });
        setTheData();
      })
      .catch((err) => {
        const valuesArray = Object.values(err.response.data.message);
        toast.error(`${valuesArray}`, {
          duration: 3000,
          position: "top-center",
        });
      })
      .finally(() => {
        setloading(false);
      });
  };
  return (
    <Row>
      <Col md={5} sm={12} className="flex">
        {open === true ? (
          <div className="w-100 flex2">
            <div style={{ textAlign: "center" }}>
              <img
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
                style={{ width: "100px", borderRadius: "50%" }}
                alt=""
              />
            </div>
            <h1 style={{ textAlign: "center" }}>{name}</h1>
            <div className="flex2 details">
              <button onClick={() => setmystate("Acc")}>
                <Link to="">Account</Link>
              </button>
              <button onClick={() => setmystate("pass")}>
                Change Password
              </button>
              <button onClick={() => setmystate("tick")}>
                <Link to="">MY TICKETS</Link>
              </button>
              <button onClick={() => setmystate("partition")}>
                PARTITIONING BOOK HISTORY
              </button>
              <button onClick={() => dispatch(Logout())}>LOG OUT</button>
            </div>
          </div>
        ) : (
          <div style={{ width: "100%", height: "100%" }} className="flex">
            <div className="loader1 mb-4"></div>
          </div>
        )}
      </Col>
      <Col md={7} sm={12}>
        {open === true ? (
          <div>
            {mystate === "Acc" && (
              <Form onSubmit={(e) => updateProf(e)}>
                <h1>Account</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    value={data.first_name}
                    name="first_name"
                    onChange={(e) => setformupdate(e)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    name="last_name"
                    value={data.last_name}
                    onChange={(e) => setformupdate(e)}
                    required
                  />
                </Form.Group>{" "}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="email"
                    name="email"
                    value={data.email}
                    onChange={(e) => setformupdate(e)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Password"
                    value={data.mobile}
                    onChange={(e) => setformupdate(e)}
                    name="mobile"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Social</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Password"
                    value={data.social_link}
                    onChange={(e) => setformupdate(e)}
                    name="social_link"
                    required
                  />
                </Form.Group>{" "}
                <Button variant="primary" type="submit" className="w-100">
                  {loading ? <ClipLoader size={15} /> : "Update Profile"}
                </Button>
              </Form>
            )}
            {mystate === "pass" && <ChangePassword />}
            {mystate === "tick" && <EventTickets />}
            {mystate === "partition" && <PartitionTickets />}
          </div>
        ) : (
          <div style={{ width: "100%", height: "100%" }} className="flex">
            <div className="loader1"></div>
          </div>
        )}
      </Col>
    </Row>
  );
};

export default LoggedIn;
