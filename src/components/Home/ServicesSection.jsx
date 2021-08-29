import React from "react";
import Features from "../Features/Features";
import styled from "styled-components";

const MoreButtonContainer = styled.div`
margin-top: 2rem;
display: flex;
justify-content: center;
align-items: center;
width: 100%;

`


const ServicesSection = () => {
  return (
    <div className="wealth-creation-features wealth-section-space">
      <div className="container">
        <Features />
        <MoreButtonContainer>
        <button className="btn sb-secondary-cta-button">More</button>
         </MoreButtonContainer>

      </div>
    </div>
  );
};

export default ServicesSection;
