import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      className={`${className} z-10 right-0 h-10 w-10`}
      src="/img/rightArrow.svg"
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      className={`${className} z-10 left-0 h-10 w-10`}
      src="/img/leftArrow.svg"
      onClick={onClick}
    />
  );
}

function MultipleItems() {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    afterChange: (index) => setActiveSlide(index),
    nextArrow: <SampleNextArrow />,
    prevArrow: activeSlide == 0 ? <></> : <SamplePrevArrow />,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="px-5">
          <img
            className="rounded-md"
            src="/img/slide1.avif"
            alt="slide1.avif"
          />
        </div>
        <div className="px-5">
          <img
            src="/img/slide2.avif"
            alt="slide1.avif"
            className="rounded-md"
          />
        </div>
        <div className="px-5">
          <img
            src="/img/slide3.avif"
            alt="slide1.avif"
            className="rounded-md"
          />
        </div>
        <div className="px-5">
          <img
            src="/img/slide4.avif"
            alt="slide1.avif"
            className="rounded-md"
          />
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;
