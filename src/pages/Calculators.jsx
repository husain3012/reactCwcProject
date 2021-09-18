import React from "react";
import AspireBigCalculator from "../components/Calculator/Calculators/AspireBig";
import EducationCalculator from "../components/Calculator/Calculators/Education";
import EmergencyCalculator from "../components/Calculator/Calculators/Emergency";
import EmiCalculator from "../components/Calculator/Calculators/EMI";
import GetWealthyCalculator from "../components/Calculator/Calculators/GetWealthy";
import RetirementCalculator from "../components/Calculator/Calculators/Retirement";
import WeddingCalculator from "../components/Calculator/Calculators/Wedding";
import BlogLandingCard from "../components/UI/LandingCard/BlogLandingCard";
import styled from "styled-components";
import AllCalculators from "../components/Calculator/AllCalculators";

const CalculatorPage = styled.div`
  background: url(/assets/wave.svg) no-repeat;
  background-size: cover;
  background-color: var(--mid-blue);
`;

export const AspireBig = (props) => {
  return (
    <CalculatorPage>
      <BlogLandingCard
        heading="Aspire Big"
        subHeading="Aspire Big Calculator"
        cover="https://images.unsplash.com/photo-1562596127-3885a12dcdb6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
      />
      <br />
      <AspireBigCalculator />
      <AllCalculators active="Aspire Big" />
    </CalculatorPage>
  );
};
export const Education = (props) => {
  return (
    <CalculatorPage>
      <BlogLandingCard
        heading="Education"
        subHeading="Education Calculator"
        cover="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
      />
      <br />
      <EducationCalculator />
      <AllCalculators active="Education" />
    </CalculatorPage>
  );
};

export const Emergency = (props) => {
  return (
    <CalculatorPage>
      <BlogLandingCard
        heading="Emergency"
        subHeading="Emergency Calculator"
        cover="https://images.unsplash.com/photo-1579037005241-a79202c7e9fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
      />
      <br />
      <EmergencyCalculator />
      <AllCalculators active="Emergency" />
    </CalculatorPage>
  );
};

export const EMI = (props) => {
  return (
    <CalculatorPage>
      <BlogLandingCard heading="EMI" subHeading="EMI Calculator" cover="https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" />
      <br /> <EmiCalculator />
      <AllCalculators active="EMI" />
    </CalculatorPage>
  );
};

export const GetWealthy = (props) => {
  return (
    <CalculatorPage>
      <BlogLandingCard
        heading="Get Wealthy"
        subHeading="Get Wealthy Calculator"
        cover="https://images.unsplash.com/photo-1584134239909-eb4800257d6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
      />
      <br /> <GetWealthyCalculator />
      <AllCalculators active="Get Wealthy" />
    </CalculatorPage>
  );
};
export const Retirement = (props) => {
  return (
    <CalculatorPage>
      <BlogLandingCard
        heading="Retirement"
        subHeading="Retirement Calculator"
        cover="https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
      />
      <br /> <RetirementCalculator />
      <AllCalculators active="Retirement" />
    </CalculatorPage>
  );
};
export const Wedding = (props) => {
  return (
    <CalculatorPage>
      <BlogLandingCard
        heading="Wedding"
        subHeading="Wedding Calculator"
        cover="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
      />
      <br /> <WeddingCalculator />
      <AllCalculators active="Wedding" />
    </CalculatorPage>
  );
};
