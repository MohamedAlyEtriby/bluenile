import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";

const EventSelection = ({ image }) => {
  console.log(image);
  const [selectedImage, setImage] = useState(image);
  useEffect(() => {
    setImage(image);
  }, [image]);


  return (
    <Col md={6} xs={12}>
      <div>
        <img
          src={`https://blueboat.bluenileboat.com/public/uploads/events/${selectedImage}`}
          style={{
            width: "100%",
            height: "400px",
            marginBottom: "50px",
            border: "2px solid white",
          }}
          alt=""
        />
      </div>
      
    </Col>
  );
};

export default EventSelection;
