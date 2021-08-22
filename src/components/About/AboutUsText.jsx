import React from "react";
import styled from "styled-components";
import { useState } from "react";
const AboutUsTextContainer = styled.div`
  position: relative;
  background-color: #F3F1F5;
  color: #7F7C82;
  width: 80vw;
  max-width: 100ch;
  padding: 2rem;
  margin-bottom: 100px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  z-index: -1;

  @media (max-width: 767px) {
    margin-top: 50px;
    width: 100%;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

const AboutUsText = () => {
  return (
    <AboutUsTextContainer className="container about-us-text animate__animated animate__fadeInDown">
      <div>
        <p>Welcome to Brand Name, your number one source for all things [product]. We're dedicated to giving you the very best of [product], with a focus on [store characteristic 1], [store characteristic 2], [store characteristic 3].</p>
        <p>
          Founded in [year] by [founder name], Brand Name has come a long way from its beginnings in [starting location]. When [founder name] first started out, [his/her/their] passion for [brand message - e.g. "eco-friendly cleaning
          products"] drove them to [action: quit day job, do tons of research, etc.] so that Brand Name can offer you [competitive differentiator - e.g. "the world's most advanced toothbrush"]. We now serve customers all over [place - town,
          country, the world], and are thrilled that we're able to turn our passion into [my/our] own website.
        </p>
        <p>[I/we] hope you enjoy [my/our] products as much as [I/we] enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact [me/us].</p>
        <p className="footer-section">
          
          <span>Sincerely,</span>
          <br/>

          <span>[Founder Name]</span>
        </p>
      </div>
    </AboutUsTextContainer>
  );
};

export default AboutUsText;
