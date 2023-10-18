import React, { useEffect, useState } from "react";
import BackGroundPages from "../components/BackGroundPages";
import { Col, Container, Row } from "react-bootstrap";
import { getPart } from "../Services/GetApi";
import Partition from "../components/Partition";
import { Navigate, useNavigate } from "react-router-dom";

const Partitions = () => {
  const [datas, setdatas] = useState([]);
  const nav = useNavigate();
  const handleclick = (id) => {
    nav(`/Partitions/${id}`);
  };
  useEffect(() => {
    getPart()
      .then((res) => {
        setdatas(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <BackGroundPages image="Partitions" title="Partitions" />
      <Container>
        <Row style={{ display: "flex", justifyContent: "space-around" }}>
          {datas.length !== 0 ? (
            datas.map((item, index) => {
              return (
                <Col xs={0} md={5} key={item.id}>
                  <div onClick={() => handleclick(index)}>
                    <Partition
                      Name={item.name}
                      image={`https://blueboat.bluenileboat.com/public/uploads/partition/${item.image}`}
                      price={item.price}
                      description={item.short_description}
                    />
                  </div>
                </Col>
              );
            })
          ) : (
            <>
              <Col md={6} xs={12} style={{display:"flex",justifyContent:"center"}}>
                <div className="loader1"></div>
              </Col>
              <Col  md={6} xs={12} style={{display:"flex",justifyContent:"center"}}>
                <div className="loader1"></div>
              </Col>
            </>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Partitions;
