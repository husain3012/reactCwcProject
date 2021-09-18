import React, { useState } from "react";
import { CalculateButton, FieldContainer } from "../InputFieldCalc";
import NumberInput from "../NumberInput";
import SliderInput from "../SliderInput";
import ButtonInputContainer from "../ButtonInput";
import CalculatorContainer from "../CalculatorContainer";


const Emergency = (props) => {
  const [monthlyExpense, setMonthlyExpense] = useState();
  const [emergencyMonths, setEmergencyMonths] = useState('');
  const [annualReturn, setAnnualReturn] = useState();
  const [lumpSumInvestment, setLumpSumInvestment] = useState();


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
        <h3>Build funds in {emergencyMonths} (months): </h3>
        <NumberInput setValueHandler={setEmergencyMonths} value={emergencyMonths} label="Months" />
      </FieldContainer>

      <FieldContainer>
        <h3>Lump Sum Investment: </h3>
        <NumberInput setValueHandler={setLumpSumInvestment} value={lumpSumInvestment} label="Lump Sum" />
      </FieldContainer>

      <FieldContainer>
        <h3>Monthly Expenses (incl EMI)</h3>
        <NumberInput setValueHandler={setMonthlyExpense} value={monthlyExpense} label="Monthly Expenses" />
      </FieldContainer>
      <FieldContainer>
        <ButtonInputContainer
          getValue={() => {
            return monthlyExpense;
          }}
          setValueHandler={setMonthlyExpense}
          values={monthlyExpensesOptions}
        />
      </FieldContainer>

      <FieldContainer>
        <h3>Annual Rate of Return ({annualReturn}%)</h3>
        <SliderInput setValueHandler={setAnnualReturn} step={0.001} min={0} max={10} />
      </FieldContainer>

      <FieldContainer>
        <CalculateButton>Calculate</CalculateButton>
      </FieldContainer>
    </CalculatorContainer>
  );
};

export default Emergency;
