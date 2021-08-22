import React from "react";
import styled from "styled-components";
import AboutUsCarousel from "./AboutUsCarousel";
import AboutUsText from "./AboutUsText";
import MediaQuery from "react-responsive";
const AboutWrapper = styled.div`
  padding: 2rem 1rem;
  background-color: #4468e4;
  background-image: url("/assets/wave.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  ${"" /* border-bottom-left-radius: 100px; */}
  border-bottom-right-radius: 50px;
  ${"" /* margin-bottom: 100px; */}
  max-width: 100%;
`;

const AboutHeading = styled.div`
  background-color: #F8F5F1;
  padding: 2.5rem;
  margin: auto;
  border-radius: 10px;
  ${"" /* max-width: 40vw; */}
  border-bottom-left-radius: 40px;
  border-top-right-radius: 40px;
  max-width: 50ch;
  @media (max-width: 768px) {
    width: 90vw;
    margin-bottom: 2rem;
  }

  h3{
    color: #47CBB0;
  }
`;

// export const
const AboutBody = () => {
  return (
    <>
      <AboutWrapper className="row">
        <div className="col-md-6 col-12">
          <AboutHeading>
            <h1>About Us</h1>
            <h3>Lorem Ipsum is out motto </h3>
            <p>
              lorem ipsum dolorr sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore
              doloribus.
            </p>
          </AboutHeading>
        </div>
        <div className="col-md-6 col-12">
          <AboutUsCarousel />
        </div>
      </AboutWrapper>
      <MediaQuery maxWidth={768}>
        <hr style={{marginLeft: "auto", marginRight: "auto", marginTop:"50px",width:"80vw"}}/>
      </MediaQuery>
      <AboutUsText />
    </>
  );
};

export default AboutBody;
