import React, { useState } from "react";
import styled from "styled-components";
import { CalculateButton, FieldContainer } from "./InputFieldCalc";
import NumberInput from "./NumberInput";
import SliderInput from "./SliderInput";
import ButtonInputContainer from "./ButtonInput";

const CalculatorContainer = styled.div`
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  padding: 10px;
  margin: 0 auto;
  width: fit-content;
`;

const EmiCalculator = (props) => {
  const [loanAmount, setLoanAmount] = useState();
  const [interestRate, setInterestRate] = useState();
  const [years, setYears] = useState();

  const setYearsHandler = (e) => {
    console.log(parseInt(e.target.value));
    setYears(parseInt(e.target.value));
  };
  const loanAmountHandler = (e) => {
    console.log(parseInt(e.target.value));
    setLoanAmount(parseInt(e.target.value));
  };

  const loanAmountOptions = [
    {
      text: "10k",
      value: 10000,
    },
    {
      text: "50k",
      value: 50000,
    },
    {
      text: "1L",
      value: 100000,
    },
    {
      text: "5L",
      value: 500000,
    },
  ];
  return (
    <CalculatorContainer>
      <FieldContainer>
        <h3>No. of Years</h3>
        <NumberInput label="No Of Years" handleInput={setYearsHandler} value={years} />
      </FieldContainer>
      <FieldContainer>
        <h3>Loan Amount</h3>
        <NumberInput label="Loan Amount" handleInput={loanAmountHandler} value={loanAmount} />
      </FieldContainer>
      <FieldContainer>
        <ButtonInputContainer
          getValue={() => {
            return loanAmount;
          }}
          setValueHandler={setLoanAmount}
          values={loanAmountOptions}
        />
      </FieldContainer>

      <FieldContainer>
        <h3>Interest Rate ({interestRate}%)</h3>
        <SliderInput setValueHandler={setInterestRate} step={0.01} min={0} max={50} />
      </FieldContainer>
      <FieldContainer>
        <CalculateButton>Calculate</CalculateButton>
      </FieldContainer>
    </CalculatorContainer>
  );
};

export default EmiCalculator;
