import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const CardContainer = styled(Link)`
  text-decoration: none;
  max-width: 70%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 25px;
  background-color: ${(props) => props.color || "#035397"};
  border-top-right-radius: 10px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 50px;
  margin-top: ${(props) => props.offset || "0px"};

  h1 {
    color: #f7f6f2;
  }
  p {
    color: #2c394b;
    color: #c8c6c6;
  }

  img {
    align-self: flex-end;
    max-width: 100%;
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
    </CardContainer>
  );
};

export default FeatureCard;
