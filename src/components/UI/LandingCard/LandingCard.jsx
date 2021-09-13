import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import styled from "styled-components";

export const Heading = styled.div`
  background-color: #f8f5f1;
  padding: 2.5rem;
  margin: ${(props) => props.margin || "auto"};
  border-radius: 10px;
  ${"" /* max-width: 40vw; */}
  border-bottom-left-radius: 40px;
  border-top-right-radius: 40px;
  max-width: 50ch;
  @media (max-width: 768px) {
    width: 90vw;
    margin-bottom: 2rem;
  }

  h3 {
    color: #47cbb0;
  }
`;

export const HeadingLarge = styled.div`
  background: rgba(255, 255, 255, 0.85);
  ${"" /* box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ); */}
  backdrop-filter: blur( 9px );
  -webkit-backdrop-filter: blur(9px);

  color: ${(props) => props.color || "#000"};
  padding: 10px 2.5rem;
  margin: ${(props) => props.margin || "auto"};
  border-radius: 5px;
  text-align: center;
  width: fit-content;
  h1 {
    font-size: 3rem;
    margin-bottom: 0.5rem;
  }
  p {
    color: #47cbb0;
  }
`;

export const LandingCard = styled.div`
  padding: 80px 1rem;

  background: ${(props) => (props.background ? "linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), " + props.background : "url(/assets/wave.svg)")};
  background-color: #035397;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  ${"" /* border-bottom-right-radius: 50px; */}
  max-width: 100%;
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;
