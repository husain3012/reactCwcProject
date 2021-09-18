import React from "react";
import { Link as RouterLink } from "react-router-dom";
import BlogLandingCard from "../components/UI/LandingCard/BlogLandingCard";
import { SectionDark, SectionLight } from "../components/UI/Section";
import styled from "styled-components";
const Link = styled(RouterLink)`
  text-decoration: none;
  color: inherit;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  &:hover {
    color: var(--orange);
  }
`;
const Description = styled.div` 

& h4{
  color: var(--dark-blue);
}

`;
const KnowMore = styled(RouterLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  & img {
    padding: 10px 0;
    margin: 0 auto;
    max-width: 300px;
    max-height: 300px;
    transition: all 0.5s ease-in-out;
  }

  @media (max-width: 768px) {
    & img {
      margin: 0 auto;
      max-width: 120px;
      max-height: 120px;
      transition: all 0.5s ease-in-out;
    }
  }
`;

const About = styled.div`
  background-color: #eee;
  background-image: url("/assets/wave2.svg");
  min-height: 320px;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20px;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  & p {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    margin: 0 auto;
    max-width: 100ch;
  }
`;
const MutualFunds = () => {
  return (
    <>
      <BlogLandingCard
        heading="Mutual Funds"
        subHeading="As a reliable company, we work with consistently offering these services to fulfil your financial needs"
        cover="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
      />

      <About>
        <p>
          When we talk about mutual funds, we think of an investment scheme that pools money from many investors which is further invested by professional fund managers. We at Awesmart .com believe every mutual fund works around certain
          investment objectives and attempts to achieve the same. It is the role of the fund manager to plan investment accordingly and allocates assets. Before investing in any mutual funds and their working so that, you can increase the
          benefits by making right the investments. We at Awesmart always desire to provide the best in class service and solutions to all our stakeholders.{" "}
        </p>
      </About>

      <SectionLight>
        <Description>
          <h1>Talk to us, or create a plan</h1>
          <p>We review the performance of the portfolio and the funds on an annual basis and recommend changes to the basket, if any.</p>
        </Description>
        <KnowMore to="/calculator/emi">
          <img src="/assets/talk-to-expert.png" alt="home" />
          <button className="btn sb-secondary-cta-button">Know More</button>
        </KnowMore>
      </SectionLight>
      <SectionDark>
        <KnowMore to="/calculator/emi">
          <img src="/assets/diy.png" alt="home" />
          <button className="btn sb-secondary-cta-button">Know More</button>
        </KnowMore>
        <Description>
          <h1>DIY Goals </h1>
          <p>
            <div className="row">
              <div className="col-md-2">
                <h4>Kick Start</h4>

                <Link to="/calculator/get_wealthy">Get Wealthy</Link>
              </div>
              <div className="col-md-2 col-12">
                <h4>Save Tax</h4>

                <Link>Calculate Your SIP</Link>
              </div>
              <div className="col-md-3 col-12">
                <h4>Family And Future</h4>
                <p>
                  {" "}
                  <Link to="/calculator/retirement">Calculate Your Retirement Plans</Link>
                </p>
                <p>
                  {" "}
                  <Link to="/calculator/education">Child Education Calculator</Link>
                </p>

                <p>
                  {" "}
                  <Link to="/calculator/wedding">Wedding Planning</Link>
                </p>
              </div>

              <div className="col-md-3 col-12">
                <h4>Emergency</h4>
                <p>
                  <Link to="/calculator/emergency">Calculate Emergency Finances</Link>
                </p>
              </div>
              <div className="col-md-2 col-12">
                <h4>Beat FDs</h4>
                <p>
                  <Link to="/calculator/emergency">SIP Calculator</Link>
                </p>
              </div>
            </div>
          </p>
        </Description>
      </SectionDark>
      <SectionLight>
        <Description>
          <h1>Mutual Funds Tools</h1>
          <p>
            It is under ownership of ministry of finance, government of India formed on 22 November, 1972. As a sole re insurer in the domestic reinsurance market, GIC provides to the direct general insurance Companies in India market. It
            is specially formed with the motive of superintendent, controlling and maintaining on business of general insurance. It offers general insurance services. The company offers reinsurance products and solutions to direct
            -companies including all your essentials like fire, marine, agriculture, health, credit, financial and life insurance.
          </p>
        </Description>
        <KnowMore to="/calculator/emi">
          <img src="/assets/calculator.png" alt="home" />
          <button className="btn sb-secondary-cta-button">Know More</button>
        </KnowMore>
      </SectionLight>
    </>
  );
};

export default MutualFunds;
