import React from "react";
import EmiCalculator from "../components/Calculator/EMI";
import styled from "styled-components";
const CalculatorPage = styled.div`
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

export const EMI = (props) => {
  return (
    <CalculatorPage>
      <h1>EMI Calculator</h1>
      <EmiCalculator />
    </CalculatorPage>
  );
};

