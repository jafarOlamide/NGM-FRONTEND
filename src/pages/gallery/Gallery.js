import React, { useState } from "react";
import "./Gallery.css";
import Carousel from "react-bootstrap/Carousel";
import "../home/Home.css";
import pic from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.jpg";
import Icon from "react-icons-kit";
import { chevronCircleRight } from "react-icons-kit/fa/chevronCircleRight";
import { chevronCircleLeft } from "react-icons-kit/fa/chevronCircleLeft";

function Gallery() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const nextIcon = <Icon icon={chevronCircleRight} size={40} />;
  const prevIcon = <Icon icon={chevronCircleLeft} size={40} />;
  return (
    <div className="gallery-container home-container">
      <div class="carousel-container">
        <Carousel
          nextIcon={nextIcon}
          prevIcon={prevIcon}
          activeIndex={index}
          onSelect={handleSelect}
        >
          <Carousel.Item>
            <div
              className="img-div"
              style={{ backgroundImage: `url(${pic})` }}
            ></div>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="img-div"
              style={{ backgroundImage: `url(${pic2})` }}
            ></div>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="img-div"
              style={{ backgroundImage: `url(${pic3})` }}
            ></div>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Gallery;
