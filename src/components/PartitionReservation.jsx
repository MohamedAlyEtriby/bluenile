import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const PartitionReservation = ({ name, price, id, count, setcount }) => {
  const { token } = useSelector((state) => state.auth);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const [From, setFrom] = useState("");
  const [To, setTo] = useState("");
  const [Day, setDay] = useState("");
  const [errorIndex, seterrorindex] = useState("");
  const [numberForm, setNumberForm] = useState(1);
  const [arrayForm, setArrayForm] = useState([
    {
      email: "",
      phone: 0,
      name: "",
      social_link: "",
    },
  ]);
  const onChData = (e, index) => {
    const { name, value } = e.target;
    const newArrayForm = [...arrayForm];
    newArrayForm[index][name] = value;
    setArrayForm(newArrayForm);
  };
  const changeNumber = (change) => {
    if (change === "Add") {
      setNumberForm((prev) => prev + 1);
      setArrayForm([...arrayForm, {}]);
      console.log(arrayForm);
    } else if (change === "Sub" && numberForm > 1) {
      setNumberForm((prev) => prev - 1);
      let arr1 = [...arrayForm];
      arr1.pop();
      setArrayForm([...arr1]);
    }
  };
  const sendData = (e) => {
    e.preventDefault();
    setloading(true);

    const SendedArr = {
      partition_id: id,
      day: Day,
      from: From,
      to: To,
      tickets: arrayForm,
    };
    console.log(SendedArr);
    axios
      .post(
        "https://blueboat.bluenileboat.com/api/singlereservation/make",
        SendedArr,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        toast.success("Reserved SUCCEESSFULLY", {
          duration: 3000,
          position: "top-center",
          icon: "👏",
        });
        seterrorindex("");
      })
      .catch((err) => {
        console.log(err.response.data.message);
        if (!token) {
          toast.error(`Please Login First`, {
            duration: 3000,
            position: "top-center",
          });
          navigate("/Account");
          setcount("Account");
        } else {
          const phoneerror = Object.keys(err.response.data.message).join("");
          console.log(33);
          if (phoneerror.includes("day") && phoneerror.includes("phone")) {
            seterrorindex(phoneerror);
            toast.error(`Please Check your Phone and Date fields`, {
              duration: 3000,
              position: "top-center",
            });
          } else if (phoneerror.includes("day")) {
            seterrorindex(phoneerror);
            toast.error(`Please Check your Date Field`, {
              duration: 3000,
              position: "top-center",
            });
          } else if (phoneerror.includes("phone")) {
            seterrorindex(phoneerror);
            toast.error(`Please Check your Phone fields`, {
              duration: 3000,
              position: "top-center",
            });
          }

          // if (theError.includes("day")) {
          //   toast.error(`You can deserve a day from the future only`, {
          //     duration: 3000,
          //     position: "top-center",
          //   });
          // }
          // if (theError.includes("Required")) {
          //   toast.error(`Some inputs are required`, {
          //     duration: 3000,
          //     position: "top-center",
          //   });
          // } else {
          //   toast.error(`Something went wrong please check ur inputs`, {
          //     duration: 3000,
          //     position: "top-center",
          //   });
          // }
        }
      })
      .finally(() => {
        setloading(false);
      });
  };
  return (
    <Col md={6} xs={12}>
      <h1>{name}</h1>
      <h2> FROM: {price}</h2>
      <div className="reservation p-4">
        {" "}
        <div
          className=""
          style={{
            display: "flex",
            border: "2px solid white",
            width: "fit-content",
          }}
        >
          {" "}
          <h1
            style={{ background: "black", cursor: "pointer" }}
            className="p-2 px-3"
            onClick={() => changeNumber("Sub")}
          >
            -
          </h1>
          <h1
            style={{ background: "white", color: "black" }}
            className="p-2 px-3"
          >
            {numberForm}
          </h1>
          <h1
            style={{ background: "#345688", color: "white", cursor: "pointer" }}
            className="p-2 px-3"
            onClick={() => changeNumber("Add")}
          >
            +
          </h1>
        </div>
        <Form className="reserveForm p-4" onSubmit={(e) => sendData(e)}>
          {arrayForm.map((item, index) => {
            return (
              <>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder={`Ticket ${index + 1} Email`}
                    name="email"
                    required
                    onChange={(e) => onChData(e, index)}
                  />
                </Form.Group>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                  <Form.Control
                    type="number"
                    placeholder={`Ticket Phone ${index + 1}`}
                    name="phone"
                    onChange={(e) => onChData(e, index)}
                    required
                  />
                  {errorIndex.includes(index.toString()) && (
                    <p style={{ color: "red", fontSize: "16.5px" }}>
                      Please Enter Correct format
                    </p>
                  )}
                </Form.Group>{" "}
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder={`Ticket ${index + 1} Person`}
                    name="name"
                    onChange={(e) => onChData(e, index)}
                    required
                  />
                </Form.Group>{" "}
                <Form.Group className="mb-5" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder={`Ticket ${index + 1} Social`}
                    onChange={(e) => onChData(e, index)}
                    name="social_link"
                    required
                  />
                </Form.Group>
              </>
            );
          })}
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Control
              type="date"
              onChange={(e) => setDay(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Label>FROM</Form.Label>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Control
              type="time"
              onChange={(e) => setFrom(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Label>To</Form.Label>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Control
              type="time"
              onChange={(e) => setTo(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" className="px-4 w-100" type="submit">
            {loading ? <ClipLoader size={15} /> : "Submit"}
          </Button>
        </Form>
      </div>
    </Col>
  );
};

export default PartitionReservation;
