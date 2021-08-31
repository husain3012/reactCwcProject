import React from "react";
import RetirementCalculator from "../components/Calculator/RetirementCalculator";
import styled from "styled-components";
const CaluculatorPage = styled.div`
  padding: 25px 0;
  background: url(/assets/calcWave.svg) no-repeat;
  background-size: cover;
  background-color: #04009a;
  h1 {
    color: #fff;
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 25px;
  }
`;

const Calculators = () => {
  return (
    <CaluculatorPage>
      <h1>Retirement Calculator</h1>
      <RetirementCalculator />
    </CaluculatorPage>
  );
};

export default Calculators;
