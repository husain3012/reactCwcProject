import React from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import "./AboutUsCarousel.css";

const carouselData = [
  {
    image: "/assets/about-us-pic1.jpg",
    heading: "Who are we?",
    caption: "We are a family of people who are dedicated to providing you with the best possible experience.",
  },
  {
    image: "/assets/about-us-pic2.jpg",
    heading: "Where are we?",
    caption: "Just a few clicks away!",
  },
  {
    image: "/assets/about-us-pic3.jpg",
    heading: "When are we?",
    caption: "Up and running 24X7",
  },
];

const CarouselItem = styled.div`
  justify-content: center;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const AboutUsCarousel = (props) => {
  return (
    <Carousel interval={3000} controls={false} className="about-us-carousel">
      <CarouselItem image={carouselData[0].image} className="carousel-item about-us-carousel-item">
        <div className="carousel-item-text-container">
          <div className="carousel-item-text">
            <h1>{carouselData[0].heading}</h1>
            <p>{carouselData[0].caption}</p>
          </div>
        </div>
      </CarouselItem>
      <CarouselItem image={carouselData[1].image} className="carousel-item about-us-carousel-item">
        <div className="carousel-item-text-container">
          <div className="carousel-item-text">
            <h1>{carouselData[1].heading}</h1>
            <p>{carouselData[1].caption}</p>
          </div>
        </div>
      </CarouselItem>
      <CarouselItem image={carouselData[2].image} className="carousel-item about-us-carousel-item">
        <div className="carousel-item-text-container">
          <div className="carousel-item-text">
            <h1>{carouselData[2].heading}</h1>
            <p>{carouselData[2].caption}</p>
          </div>
        </div>
      </CarouselItem>
    </Carousel>
  );
};

export default AboutUsCarousel;
