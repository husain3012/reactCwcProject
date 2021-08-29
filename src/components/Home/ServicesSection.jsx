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
    <div class="sb-tag sb-offerings mb-12">Services</div>
      <h2 className="wealth-section-title mb-6">Calculate your finances</h2>
        <Features />
        <MoreButtonContainer>
        <button className="btn sb-secondary-cta-button">More</button>
         </MoreButtonContainer>

      </div>
    </div>
  );
};

export default ServicesSection;
