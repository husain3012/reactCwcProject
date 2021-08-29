import React from "react";
import RetirementCalculator from "../components/Calculator/RetirementCalculator";
import styled from "styled-components";
const CaluculatorPage = styled.div`
padding: 25px 0;
background: url(/assets/calcWave.svg) no-repeat;
background-size: cover;
background-color: #04009A;
`;


const Calculators = () => {
  return (
    <CaluculatorPage>
      <RetirementCalculator />
    </CaluculatorPage>
  );
};

export default Calculators;
