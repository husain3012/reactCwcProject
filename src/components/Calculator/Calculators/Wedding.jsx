import React, { useState } from "react";
import { CalculateButton, FieldContainer } from "../InputFieldCalc";
import NumberInput from "../NumberInput";
import SliderInput from "../SliderInput";
import ButtonInputContainer from "../ButtonInput";
import CalculatorContainer from "../CalculatorContainer";

const Wedding = (props) => {
  const [currentAge, setCurrentAge] = useState();
  const [marriageAge, setMarriageAge] = useState();

  const [todayCost, setTodayCost] = useState();
  const [inflationRate, setInflationRate] = useState();
  const [annualReturn, setAnnualReturn] = useState();
  const [savings, setSavings] = useState();

  const marriageOptions = [
    {
      text: "₹ 10k",
      value: 10000,
    },
    {
      text: "₹ 50k",
      value: 50000,
    },
    {
      text: "₹ 1L",
      value: 100000,
    },
    {
      text: "₹ 5L",
      value: 500000,
    },
  ];
  return (
    <CalculatorContainer>
      <FieldContainer>
        <h3>Current Age Of Child: </h3>
        <NumberInput setValueHandler={setCurrentAge} value={currentAge} label="Current Age" />
      </FieldContainer>

      <FieldContainer>
        <h3>Expected Marriage Age: </h3>
        <NumberInput setValueHandler={setMarriageAge} value={marriageAge} label="Marriage Age" />
      </FieldContainer>

      <FieldContainer>
        <h3>Marriage Cost Today: </h3>
        <NumberInput label="Today Cost" setValueHandler={setTodayCost} value={todayCost} />
      </FieldContainer>
      <FieldContainer>
        <ButtonInputContainer
          getValue={() => {
            return todayCost;
          }}
          setValueHandler={setTodayCost}
          values={marriageOptions}
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
        <h3>Current Savings: </h3>
        <NumberInput setValueHandler={setSavings} value={savings} label="Savings" />
      </FieldContainer>

      <FieldContainer>
        <CalculateButton>Calculate</CalculateButton>
      </FieldContainer>
    </CalculatorContainer>
  );
};

export default Wedding;
