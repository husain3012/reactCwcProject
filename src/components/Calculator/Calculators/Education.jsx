import React, { useState } from "react";
import { CalculateButton, FieldContainer } from "../InputFieldCalc";
import NumberInput from "../NumberInput";
import SliderInput from "../SliderInput";
import ButtonInputContainer from "../ButtonInput";
import CalculatorContainer from "../CalculatorContainer";


const Education = (props) => {
  const [todayCost, setTodayCost] = useState();
  const [currentAge, setCurrentAge] = useState("");
  const [higherEducationAge, setHigherEducationAge] = useState("");
  const [inflationRate, setInflationRate] = useState();
  const [annualReturn, setAnnualReturn] = useState();
  const [lumpSumInvestment, setLumpSumInvestment] = useState();

  const educationOptions = [
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
        <h3>Child's Current Age: </h3>
        <NumberInput setValueHandler={setCurrentAge} value={currentAge} label="Current Age" />
      </FieldContainer>
      <FieldContainer>
        <h3>Higher Education Age: </h3>
        <NumberInput setValueHandler={setHigherEducationAge} value={higherEducationAge} label="Higher Education Age" />
      </FieldContainer>

      <FieldContainer>
        <h3>Today's Cost for the Education</h3>
        <NumberInput setValueHandler={setTodayCost} value={todayCost} label="Education Goal" />
      </FieldContainer>
      <FieldContainer>
        <ButtonInputContainer
          getValue={() => {
            return todayCost;
          }}
          setValueHandler={setTodayCost}
          values={educationOptions}
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
        <h3>Lump Sum investments</h3>
        <NumberInput setValueHandler={setLumpSumInvestment} value={lumpSumInvestment} label="Lump Sum" />
      </FieldContainer>

      <FieldContainer>
        <CalculateButton>Calculate</CalculateButton>
      </FieldContainer>
    </CalculatorContainer>
  );
};

export default Education;
