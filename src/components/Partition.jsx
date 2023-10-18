import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Partition = ({ image, Name, price, description,info }) => {
  return (
    <div className="partition" >
      <img src={image} alt="" />
      <p>{description}</p>
      <h2>{Name}</h2>
      <p>From : {price}</p>
      <Link to="">
        <Button variant="primary">
            Read More
        </Button>
      </Link>
    </div>
  );
};

export default Partition;
