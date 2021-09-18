import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const CardContainer = styled(Link)`
  text-decoration: none;
  max-width: 70%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 25px;
  background-color: ${(props) => props.color || "#035397"};
  border-top-right-radius: 10px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 50px;
  margin-top: ${(props) => props.offset || "0px"};

  h1 {
    color: var(--orange);
  }
  p {
  
    color: #F7F6F2;
  }

  img {
    margin-top: auto;
    max-width: 100%;
  }
  button {
    margin-top: auto;
    border-style: none;
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const FeatureCard = (props) => {
  const offset = () => {
    return Math.floor(Math.random() * 50);
  };
  console.log(props.offset);
  return (
    <CardContainer to={props.link} offset={props.offset} color={props.color}>
      <h1>{props.heading}</h1>
      <p>{props.text}</p>
      <img alt="img" src={props.image} />
      <button>Calculate</button>
    </CardContainer>
  );
};

export default FeatureCard;
