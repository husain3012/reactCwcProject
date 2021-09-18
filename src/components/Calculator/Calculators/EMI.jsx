import React, { useState } from "react";
import { CalculateButton, FieldContainer } from "../InputFieldCalc";
import NumberInput from "../NumberInput";
import SliderInput from "../SliderInput";
import ButtonInputContainer from "../ButtonInput";
import CalculatorContainer from "../CalculatorContainer";


const EMI = (props) => {
  const [loanAmount, setLoanAmount] = useState();
  const [interestRate, setInterestRate] = useState();
  const [years, setYears] = useState();

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
        <NumberInput label="No Of Years" setValueHandler={setYears} value={years} />
      </FieldContainer>
      <FieldContainer>
        <h3>Loan Amount</h3>
        <NumberInput label="Loan Amount" setValueHandler={setLoanAmount} value={loanAmount} />
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

export default EMI;
