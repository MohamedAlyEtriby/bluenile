import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import { Container, Row, Col, Button } from "react-bootstrap";
import Partition from "../components/Partition";
import { getPart, getpartition } from "../Services/GetApi";
import { persistor } from "../store/store";
import { useNavigate } from "react-router-dom";
const Home = ({ count, setcount }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log("zamalek", count);
  const [activated, setactivated] = useState(-1);
  const nav = useNavigate();
  const [show, setshow] = useState(true);
  const [mydata, setmydata] = useState([]);
  const [dataChose, setDataChose] = useState([]);
  const [galleryData, setGalleryData] = useState([]);
  const handlepart = (id) => {
    nav(`/Partitions/${id}`);
    setcount("Partitions")
  };
  useEffect(() => {
    getPart()
      .then((res) => {
        setmydata([...res.data]);
        setDataChose([...res.data]);
        setGalleryData([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const showGallery = (choose) => {
    const arr2 = galleryData.map((item) => {
      return item;
    });
    const arr3 = arr2.map((item) => {
      return item.images;
    });
    const concatenatedArray = [].concat(...arr3);
    if (choose === "Less") {
      setDataChose([...concatenatedArray].slice(0, 7));
    } else setDataChose([...concatenatedArray]);
    setshow(!show);
  };
  const dataFilteration = (name) => {
    const arr2 = mydata.filter((x) => x.name === name);
    setDataChose([...arr2[0].images]);
  };
  return (
    <div>
      <Slider />
      <Container style={{ width: "100%" }}>
        <div>
          <h1>BLUE NILE BOAT</h1>
          <h3>Restaurants..Clubs..Bars..lounges</h3>
        </div>
        <Row style={{ display: "flex", justifyContent: "space-around" }}>
          {mydata.length !== 0 ? (
            mydata?.map((item, index) => {
              return (
                <Col
                  xs={0}
                  md={5}
                  key={index}
                  onClick={() => handlepart(index)}
                >
                  <Partition
                    Name={item.name}
                    image={`https://blueboat.bluenileboat.com/public/uploads/partition/${item.image}`}
                    price={item.price}
                    description={item.short_description}
                  />
                </Col>
              );
            })
          ) : (
            <>
              <Col md={6}>
                <div className="loader1"></div>
              </Col>
              <Col md={6}>
                <div className="loader1"></div>
              </Col>
            </>
          )}
        </Row>
        <div>
          <h2>Events</h2>
        </div>
        <Row>
          <Col xs={12} md={5}>
            <Partition
              image="https://blueboat.bluenileboat.com/public/uploads/events/1678979691.1619428872nEqb5klbcWZ7HfsDVEQgltr8M.png"
              price="25.5"
              description="Event 2 description edited"
              Name="Event 2 Edited"
            />
          </Col>
        </Row>
        <h2>About Us</h2>
      </Container>
      <Row style={{ width: "100%", minHeight: "400px" }}>
        <Col xs={12} md={6} className="aboutleft">
          <p>
            WHO WE ARE International Group for Development and Investment
            Company (SAE) provides management services and solutions to the
            hospitality industry, all customized to suit the needs of our unique
            customers. As a company, our executive team combined has over 20
            years of experience
          </p>
        </Col>
        <Col xs={12} md={6} className="aboutright">
          <iframe
            title="myvideo"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/LjnKjuRcMyc"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
      </Row>
      <Container>
        <h1 style={{ marginTop: "50px" }}>BLUE NILE BOAT GALLERY</h1>
        <p style={{ fontWeight: "700" }}>
          International Group for Development and Investment Company (SAE)
          provides management services and solutions to the hospitality
          industry, all customized to suit the needs of our unique customers. As
          a company, our executive team combined has over 20 years of experience
          in directing and overseeing the operation of hotels and Restaurants .
        </p>
        <Row className="flex">
          {mydata.map((item, index) => {
            return (
              <Col
                xs={6}
                md={2}
                style={{
                  marginBottom: "12px",
                  textAlign: "center",
                }}
              >
                <span
                  className={`${activated === index ? "active" : ""} Ul`}
                  onClick={() => {
                    dataFilteration(item.name);
                    setactivated(index);
                    setshow(true);
                  }}
                  style={{
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                >
                  {item.name}
                </span>
              </Col>
            );
          })}
        </Row>
        <Row style={{ marginTop: "30px" }}>
          {dataChose.length !== 0 ? (
            dataChose?.map((item) => {
              return (
                <Col xs={12} md={3}>
                  <img
                    className="Bluegallery"
                    alt=""
                    src={`https://blueboat.bluenileboat.com/public/uploads/partition/${item.image}`}
                  />
                </Col>
              );
            })
          ) : (
            <div className="loader1"></div>
          )}
        </Row>
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          {show ? (
            <Button
              variant="secondary"
              onClick={() => {
                showGallery("All");
                setactivated(-1);
              }}
            >
              Show All Gallery
            </Button>
          ) : (
            <Button
              variant="secondary"
              onClick={() => {
                showGallery("Less");
                setactivated(-1);
              }}
            >
              Show Less Gallery
            </Button>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Home;
