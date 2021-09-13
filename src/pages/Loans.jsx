import React from "react";
import { Link } from "react-router-dom";
import { LandingCard, HeadingLarge } from "../components/UI/LandingCard/LandingCard";
import { SectionDark, SectionLight } from "../components/UI/Section";
import styled from "styled-components";
const ImgContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    margin: 0 auto;
    max-width: 300px;
    max-height: 300px;
    transition: all 0.5s ease-in-out;
  }
  & img:hover {
    transform: scale(1.1);
    transition: all 0.5s ease-in-out;
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
const Loans = () => {
  return (
    <div>
      <LandingCard background="url('https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')">
        <HeadingLarge>
          <h1>Loans</h1>
          <p>As a reliable company, we work with consistently offering these services to fulfil your financial needs</p>
        </HeadingLarge>
      </LandingCard>

      <About>
        <p>
          Facing trouble in your daily life due to a shortage of money? If yes, then go for guaranteed loans because these loans are beneficial for those, who are looking for urgent funds. Let’s focus on your financial systems by offering
          you what seems perfect according to your financial needs. As a reliable company, we offer types of loans extended to personal, Medical loans, home loans, car loans. We work with efforts and follow consistency to fulfill your
          financial needs. Still in doubt , choosing the perfect option for your loan needs. Get instant approval. Easy online proces
        </p>
      </About>

      <SectionLight>
        <div>
          <h1>House Loans</h1>
          <p>
            We understand Home is considered as a “ Temple “for everyone and when it comes to arranging the finance they see it as a big challenge. We are here to fulfil your wish of having a “ dream home “. We also know that while most
            people dream of owning a perfect home, achieving that goal can be quite a challenge, especially when it comes to arranging the finance required to make such an expensive purchase. To qualify for a home loan from us, the
            following criteria apply -,
            <ul>
              <li>Minimum net income INR 500,000 or INR 750,000 </li>
              <li>Minimum age ( in yrs ) 21 </li>
              <li>Maximum tenure 20, yrs, for salaried applicants 25 years. </li>
            </ul>
          </p>
        </div>
        <ImgContainer to="/calculator/emi">
          <img src="/assets/home.png" alt="home" />
        </ImgContainer>
      </SectionLight>
      <SectionDark>
        <ImgContainer to="/calculator/emi">
          <img src="/assets/home.png" alt="home" />
        </ImgContainer>
        <div>
          <h1>Loan Against Property</h1>
          <p>
            Avail Awesmart loan against property for your personal or business needs. Awesmart provides smooth and hassles free loans against property to both salaried and self-employed individuals. You can apply individually or jointly for
            a loan against property. All owners of the property have applicants. Benefits of choosing us –
            <ul>
              <li>Longer tenure, smaller Eml's </li>
              <li>Timely maintenance </li>
              <li>Easy documentation </li>
              <li>Simple repayment </li>
              <li>Adjustable rates </li>
            </ul>
          </p>
        </div>
      </SectionDark>
      <SectionLight>
        <div>
          <h1>Business Loans</h1>
          <p>
            Wanted to start a business? Don’t worry with our business loan, uplift your business in the best way and stay ahead of your competitors, scale your business in a hassle-free environment. Take it to new heights with additional
            financial help from Awesmart. As we believe today business loans are the financial backbone of many small firms and startups. We offer business loan with competitive interest rates, flexible tenures and minimal documentation to
            meet your every business need. We bring to you loan solutions that perfectly fit your every business need.
          </p>
        </div>
        <ImgContainer to="/calculator/emi">
          <img src="/assets/home.png" alt="home" />
        </ImgContainer>
      </SectionLight>

      <SectionDark>
        <ImgContainer to="/calculator/emi">
          <img src="/assets/home.png" alt="home" />
        </ImgContainer>
        <div>
          <h1>Personal Loans</h1>
          <p>
            Though a personal loan is an unsecured loan that can be used for a variety of end uses, including medical treatment, home renovation, travel, wedding, and any other urgent financial requirement with our company you can borrow up
            to 25 lakh and get instant approval on it with minimal documentation. Fulfil our easy meet the eligibility parameters and basic documentation process to avail money you need within the same day of approval. Our instant personal
            loan is available for salaried professionals in India at attractive interest rates and no hidden charges. You can avail of the preapprove offer from XYZ and get quick access to funds.
          </p>
        </div>
      </SectionDark>
    </div>
  );
};

export default Loans;
