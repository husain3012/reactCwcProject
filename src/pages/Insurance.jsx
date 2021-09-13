import React from "react";
import { Link } from "react-router-dom";
import { LandingCard, HeadingLarge } from "../components/UI/LandingCard/LandingCard";
import { SectionDark, SectionLight } from "../components/UI/Section";
import styled from "styled-components";
const KnowMore = styled(Link)`
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
  padding: 20px;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  & p {
    max-width: 100ch;
  }
`;
const Insurance = () => {
  return (
    <div>
      <LandingCard background="url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')">
        <HeadingLarge>
          <h1>Insurance</h1>
          <p>As a reliable company, we work with consistently offering these services to fulfil your financial needs</p>
        </HeadingLarge>
      </LandingCard>

      <About>
        <p>
          As we know the life and property of an individual are surrounded by the risk of death disability or destruction. These risks may result in financial losses. Insurance is a well-advised way to transfer such risks to an insurance
          company. We at Awesmart offer life insurance, health insurance and home insurance. So in times of trouble, be assured we have got your back. You can rely on us at all times. Less paperwork and no-fault protection. Choose what
          seems best for you. Our insurance policy has details about the conditions and circumstances under which insurance company will pay out the insurance amount to either insured person or the nominees. Be it life insurance, or general
          insurance you can buy an insurance policy offline as well as online. We are not forcing you to choose us but making you believe why to choose us.{" "}
        </p>
      </About>

      <SectionLight>
        <div>
          <h1>Term Insurance</h1>
          <p>
            You may not always be around to take care of your family. And that’s when our term plan insurance ensures your loved ones are well-protected. The most cost-effective way to secure your families financial future. High protection
            at low premiums. Awesmart term insurance can continue to maintain your families lifestyle by funding essential day to day expenditures and also achieve their life goal even in your absence. In case of death of insured during the
            period the beneficiary receives death benefit as defined under the chosen term insurance plan. It also helps the family in paying off debts, such as car loans and home loans if any. Three essential from term insurance –
            <ul>
              <li>Minimize life risks </li>
              <li>Securing family future</li>
              <li>Prepared for any uncertainties </li>
            </ul>
          </p>
        </div>
        <KnowMore to="/calculator/emi">
          <img src="/assets/talk-to-expert.png" alt="home" />
        </KnowMore>
      </SectionLight>
      <SectionDark>
        <KnowMore to="/calculator/emi">
          <img src="/assets/talk-to-expert.png" alt="home" />
        </KnowMore>
        <div>
          <h1>GMC ( Group medical policy ) </h1>
          <p>
            Afraid of medical expenses? Do not worry about the treatment of your employees, Awesmart group medical policy offers health coverage to all at affordable pricing. Our comprehensive group health plan includes not just health
            insurance but also covers your employees essential healthcare expenses including full body health check up, pharmacy benefits, unlimited tele-consultants, and mental wellbeing. Our plan comes in an affordable monthly subscription
            that is easy to manage. Get 24*7 support with the group plan which is truly different .
          </p>
        </div>
      </SectionDark>
      <SectionLight>
        <div>
          <h1>GIC ( general insurance services ) </h1>
          <p>
            It is under ownership of ministry of finance, government of India formed on 22 November, 1972. As a sole re insurer in the domestic reinsurance market, GIC provides to the direct general insurance Companies in India market. It
            is specially formed with the motive of superintendent, controlling and maintaining on business of general insurance. It offers general insurance services. The company offers reinsurance products and solutions to direct
            -companies including all your essentials like fire, marine, agriculture, health, credit, financial and life insurance.
          </p>
        </div>
        <KnowMore to="/calculator/emi">
          <img src="/assets/talk-to-expert.png" alt="home" />
        </KnowMore>
      </SectionLight>
    </div>
  );
};

export default Insurance;
