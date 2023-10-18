import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Fade } from "react-reveal";
const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      className="custom-carousel  "
      activeIndex={index}
      onSelect={handleSelect}
      style={{ marginBottom: "60px" }}
    >
      <Carousel.Item className="custom-carousel-item ">
        <img
          className="d-block w-100 filter"
          src="/assets/greenimage.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="Caption fontdiff">
          <Fade right>
            <h4>The Defintion of clubbing </h4>
            <p className="myfont" style={{fontSize:"50px"}}>TEMPO</p>
          </Fade>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="custom-carousel-item">
        <img
          className="d-block w-100 filter"
          src="/assets/slideimage1.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className="Caption  fontdiff">
          <Fade right>
            <h4>ME BAR.</h4>
            <p className="myfont">Redifining the night</p>
          </Fade>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="custom-carousel-item ">
        <img
          className="d-block w-100 filter"
          src="/assets/slideimg3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className="Caption fontdiff">
          <Fade right>
            <h4>HUNGRY BOAT SEAFOOD RESTAURANT</h4>
            <p className="myfont">Form The Sea to Fire</p>
          </Fade>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="custom-carousel-item ">
        <img
          className="d-block w-100 filter"
          src="/assets/slideimg4.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className="Caption fontdiff">
          <Fade right>
            <h4>Anapos</h4>
            <p className="myfont">Story of the Nile</p>
          </Fade>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ControlledCarousel;
