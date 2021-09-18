import React from "react";
import FeaturesList from "../Features/FeaturesList";
import styled from "styled-components";
import { Link } from "react-router-dom";
const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: fit-content;
  margin: 0 auto;
  margin-top: 50px;
  padding: 1rem;
  h1 {
    color: var(--orange);
  }
`;

const ItemWrapper = styled.div`
  justify-content: center;
  align-items: center;
`;

const FeatureItem = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  height: 150px;
  width: 150px;
  margin: 10px;
  background-color: rgba(0, 0, 0, 0.75);
  background-color: ${(props) => (props.isActive ? "rgba(0, 0, 0, 0.9)" : "rgba(0, 0, 0, 0.75)")};

  border-radius: 100%;
  padding: 10px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: multiply;
  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  & h3 {
    text-align: center;
    color: ${(props) => (props.isActive ? "var(--orange)" : "#fff")};
    font-size: 1.4rem;
    max-width: 80%;
    transition: all 0.3s;
  }
  &:hover {
    h3 {
      color: var(--orange);
      transition: all 0.3s;
    }
  }

  @media (max-width: 768px) {
    height: 120px;
    width: 120px;
    margin: 5px;
  }

  & h3 {
 
    font-size: 1.1rem;
   
  }
`;

const AllCalculators = (props) => {
  return (
    <FooterWrapper>
      <h1>All Calculators</h1>
      <ItemWrapper className="row">
        {FeaturesList.map((item, index) => (
          <FeatureItem isActive={props.active === item.heading} to={item.link} className="col-md-12" key={index} image={item.image}>
            <h3>{item.heading}</h3>
          </FeatureItem>
        ))}
      </ItemWrapper>
    </FooterWrapper>
  );
};

export default AllCalculators;
