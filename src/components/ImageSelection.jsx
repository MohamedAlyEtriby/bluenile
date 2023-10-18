import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";

const ImageSelection = ({ image, images }) => {
  console.log(image)
  const [selectedImage, setImage] = useState(image);
  useEffect(() => {
    setImage(image);
  }, [image]);
  return (
    <Col md={6} xs={12}>
      <div>
        <img
          src={`https://blueboat.bluenileboat.com/public/uploads/partition/${selectedImage}`}
          style={{
            width: "100%",
            height: "400px",
            marginBottom: "50px",
            border: "2px solid white",
          }}
          alt=""
        />
      </div>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {images?.map((item) => {
          return (
            <img
              alt=""
              src={`https://blueboat.bluenileboat.com/public/uploads/partition/${item.image}`}
              style={{
                width: "100px",
                height: "100px",
                border: "2px solid white",
              }}
              onClick={() => setImage(`${item.image}`)}
            />
          );
        })}
      </div>
    </Col>
  );
};

export default ImageSelection;
