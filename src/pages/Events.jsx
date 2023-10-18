import React, { useEffect, useState } from "react";
import BackGroundPages from "../components/BackGroundPages";
import { Col, Container, Row } from "react-bootstrap";
import { getPart } from "../Services/GetApi";
import Partition from "../components/Partition";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { MoonLoader } from "react-spinners";
const Events = () => {
  const { token } = useSelector((state) => state.auth);
  const [datas, setdatas] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nav = useNavigate();
  const handleclick = (id) => {
    nav(`/Events/${id}`);
  };
  useEffect(() => {
    axios
      .get("https://blueboat.bluenileboat.com/api/events", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setdatas([...res.data.data]);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <BackGroundPages image="Partitions" title="Events" />
      <Container>
        <Row style={{ display: "flex", justifyContent: "space-around" }}>
          {datas.length !== 0 ? (
            datas.map((item, index) => {
              return (
                <Col xs={0} md={5} key={item.id}>
                  <div onClick={() => handleclick(index)}>
                    <Partition
                      Name={item.name}
                      image={`https://blueboat.bluenileboat.com/public/uploads/events/${item.image}`}
                      price={item.price}
                      description={item.short_description}
                    />
                  </div>
                </Col>
              );
            })
          ) : (
            <div style={{display:"flex",justifyContent:"center"}}>
              <div className="loader1"></div>
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Events;
