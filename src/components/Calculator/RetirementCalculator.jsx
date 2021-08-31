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

const RetirementCalculator = (props) => {
  const [monthlyExpense, setMonthlyExpense] = useState();
  const [ageRange, setAgeRange] = useState([70, 80]);
  const [inflationRate, setInflationRate] = useState();
  const [annualReturn, setAnnualReturn] = useState();
  const [roi, setRoi] = useState();

  const monthlyExpansesHandeler = (e) => {
    console.log(parseInt(e.target.value));
    setMonthlyExpense(parseInt(e.target.value));
  };

  const monthlyExpensesOptions = [
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
        <h3>Current Age: </h3>
        <NumberInput label="Current Age" />
      </FieldContainer>
      <FieldContainer>
        <h3>Plane for Age ({ageRange[0] + "-" + ageRange[1]})</h3>
        <SliderInput value={ageRange} setValueHandeler={setAgeRange} min={60} max={100} />
      </FieldContainer>
      <FieldContainer>
        <h3>Monthly Expenses</h3>
        <NumberInput label="Monthly Expenses" handleInput={monthlyExpansesHandeler} value={monthlyExpense} />
      </FieldContainer>
      <FieldContainer>
        <ButtonInputContainer
          getValue={() => {
            return monthlyExpense;
          }}
          setValueHandeler={setMonthlyExpense}
          values={monthlyExpensesOptions}
        />
      </FieldContainer>

      <FieldContainer>
        <h3>Inflation Rate ({inflationRate}%)</h3>
        <SliderInput setValueHandeler={setInflationRate} step={0.001} min={0} max={10} />
      </FieldContainer>
      <FieldContainer>
        <h3>Annual Rate of Return ({annualReturn}%)</h3>
        <SliderInput setValueHandeler={setAnnualReturn} step={0.001} min={0} max={10} />
      </FieldContainer>
      <FieldContainer>
        <h3>Retirement Savings till Date</h3>
        <NumberInput label="Retirement Savings" />
      </FieldContainer>
      <FieldContainer>
        <h3>Return on Investments ({roi}%):</h3>
        <SliderInput setValueHandeler={setRoi} step={0.001} min={0} max={10} />
      </FieldContainer>
      <FieldContainer>
        <CalculateButton>Calculate</CalculateButton>
      </FieldContainer>
    </CalculatorContainer>
  );
};

export default RetirementCalculator;
