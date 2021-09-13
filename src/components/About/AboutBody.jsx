import React from "react";
import styled from "styled-components";
import AboutUsCarousel from "./AboutUsCarousel";
import AboutUsText from "./AboutUsText";
import MediaQuery from "react-responsive";
import {LandingCard, Heading} from "../UI/LandingCard/LandingCard";

// export const
const AboutBody = () => {
  return (
    <>
      <LandingCard>
      <div className="row">
        <div className="col-md-6 col-12">
          <Heading>
            <h1>About Us</h1>
            <h3>Lorem Ipsum is out motto </h3>
            <p>
              lorem ipsum dolorr sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore
              doloribus.
            </p>
          </Heading>
        </div>
        <div className="col-md-6 col-12">
          <AboutUsCarousel />
        </div>
        </div>
      </LandingCard>
      <MediaQuery maxWidth={768}>
        <hr style={{marginLeft: "auto", marginRight: "auto", marginTop:"50px",width:"80vw"}}/>
      </MediaQuery>
      <AboutUsText />
    </>
  );
};

export default AboutBody;
