import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import PartitionReservation from "./PartitionReservation";
import axios from "axios";
import EventSelection from "./EventSelection";
import EventReservation from "./EventReservation";
const EventDetails = ({setcount}) => {
  const [datas, setdatas] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("https://blueboat.bluenileboat.com/api/events")
      .then((res) => {
        setdatas([...res.data.data]);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Container style={{marginTop:"70px"}}>
      <Row>
        <EventSelection image={datas[id]?.image} images={datas[id]?.images} />
        <EventReservation
          name={datas[id]?.name}
          price={datas[id]?.price}
          id={datas[id]?.id}
          setcount={setcount}
        />
      </Row>
    </Container>
  );
};

export default EventDetails;
