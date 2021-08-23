import React from "react";
import styled from "styled-components";
import PrivacyPolicyText from "../components/PrivacyPolicyText";

const TextContainer = styled.div`
  ${
    "" /* max-height: 80vh;
  overflow-y: scroll;
  overflow-x: hidden; */
  }
  padding: 2.5rem;
  margin: 2rem 1.5rem;
  max-width: 100ch;
  border-style: solid;
  border-width: 1px;
  border-color: #e6e6e6;
  background-color: #ededed;
  color: #444444;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  white-space: normal;

  @media (max-width: 768px) {
      max-width: 100%;
  }
`;

const PrivacyPolicyHeading = styled.div`
  ${
    "" /* background: rgb(255, 255, 255);
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 20%, rgba(71, 203, 176, 1) 50%, rgba(255, 255, 255, 1) 80%); */
  }
  background: rgb(255,255,255);
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(173, 173, 173, 1) 50%, rgba(255, 255, 255, 1) 100%);
  max-width: 100ch;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  margin-top: 100px;
  padding: 1rem;
  color: #fff;
`;

const IllustrationContainer = styled.div`
  position: fixed;
  top: 100%;
  transform: translateY(-50%);
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <PrivacyPolicyHeading>
        <h1>Privacy Policy</h1>
      </PrivacyPolicyHeading>
      <div className="d-flex justify-content-center align-items-center">
        <TextContainer>
          {" "}
          <PrivacyPolicyText />{" "}
        </TextContainer>
      </div>
    </div>
  );
};

{
  /* <div className="row m-5">
<div className="col-md-8 col-12">
  <TextContainer>
    <PrivacyPolicyText />
  </TextContainer>
</div>
<div className="col-md-4 col-12 ">
  <IllustrationContainer>
    <Illustration src="/assets/privacy_policy.png" alt="illustration" />
  </IllustrationContainer>
</div>
</div> */
}

export default PrivacyPolicy;
