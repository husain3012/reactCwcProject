import React, { useState } from "react";
import { CalculateButton, FieldContainer } from "../InputFieldCalc";
import NumberInput from "../NumberInput";
import SliderInput from "../SliderInput";
import ButtonInputContainer from "../ButtonInput";
import CalculatorContainer from "../CalculatorContainer";


const Retirement = (props) => {
  const [currentAge, setCurrentAge] = useState('');
  const [monthlyExpense, setMonthlyExpense] = useState();
  const [ageRange, setAgeRange] = useState([70, 80]);
  const [inflationRate, setInflationRate] = useState();
  const [annualReturn, setAnnualReturn] = useState();
  const [savings, setSavings] = useState('');
  const [roi, setRoi] = useState();

  const monthlyExpansesHandler = (e) => {
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
        <NumberInput setValueHandler={setCurrentAge}  value={currentAge} label="Current Age" />
      </FieldContainer>
      <FieldContainer>
        <h3>Plane for Age ({ageRange[0] + "-" + ageRange[1]})</h3>
        <SliderInput value={ageRange} setValueHandler={setAgeRange} min={60} max={100} />
      </FieldContainer>
      <FieldContainer>
        <h3>Monthly Expenses</h3>
        <NumberInput label="Monthly Expenses" setValueHandler={setMonthlyExpense} value={monthlyExpense} />
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
        <h3>Inflation Rate ({inflationRate}%)</h3>
        <SliderInput setValueHandler={setInflationRate} step={0.001} min={0} max={10} />
      </FieldContainer>
      <FieldContainer>
        <h3>Annual Rate of Return ({annualReturn}%)</h3>
        <SliderInput setValueHandler={setAnnualReturn} step={0.001} min={0} max={10} />
      </FieldContainer>
      <FieldContainer>
        <h3>Retirement Savings till Date</h3>
        <NumberInput setValueHandler={setSavings}  value={savings} label="Retirement Savings" />
      </FieldContainer>
      <FieldContainer>
        <h3>Return on Investments ({roi}%):</h3>
        <SliderInput setValueHandler={setRoi} step={0.001} min={0} max={10} />
      </FieldContainer>
      <FieldContainer>
        <CalculateButton>Calculate</CalculateButton>
      </FieldContainer>
    </CalculatorContainer>
  );
};

export default Retirement;
