import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPart } from "../Services/GetApi";
import ImageSelection from "./ImageSelection";
import { Container, Row } from "react-bootstrap";
import PartitionReservation from "./PartitionReservation";
const PartitionDetails = ({ setcount, count }) => {
  const [datas, setdatas] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getPart()
      .then((res) => {
        setdatas([...res.data]);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Container style={{ marginTop: "70px" }}>
      <Row>
        <ImageSelection image={datas[id]?.image} images={datas[id]?.images} />
        <PartitionReservation
          name={datas[id]?.name}
          price={datas[id]?.price}
          id={datas[id]?.id}
          setcount={setcount}
          count={count}
        />
      </Row>
    </Container>
  );
};

export default PartitionDetails;
