import React, { useState } from "react";
import { CalculateButton, FieldContainer } from "../InputFieldCalc";
import NumberInput from "../NumberInput";
import SliderInput from "../SliderInput";
import ButtonInputContainer from "../ButtonInput";
import CalculatorContainer from "../CalculatorContainer";



const AspireBig = (props) => {
  const [achieveGoalYear, setAchieveGoalYear] = useState();
  const [todayCost, setTodayCost] = useState();

  const [investmentStartYear, setInvestmentStartYear] = useState();
  const [inflationRate, setInflationRate] = useState();
  const [annualReturn, setAnnualReturn] = useState();
  const [lumpSumInvestment, setLumpSumInvestment] = useState();

  const goalOptions = [
    {
      text: "Home",
      value: 2000000,
    },
    {
      text: "Car",
      value: 700000,
    },
    {
      text: "Holidays",
      value: 10000,
    },
  ];
  return (
    <CalculatorContainer>
      <FieldContainer>
        <h3>Achieve goal by year: </h3>
        <NumberInput setValueHandler={setAchieveGoalYear} value={achieveGoalYear} label="Year" />
      </FieldContainer>

      <FieldContainer>
        <h3>Start Investment by year: </h3>
        <NumberInput setValueHandler={setInvestmentStartYear} value={investmentStartYear} label={"eg: " + (parseInt(new Date().getFullYear()) + 4)} />
      </FieldContainer>

      <FieldContainer>
        <h3>Today's Cost for the goal</h3>
        <NumberInput label="Goal" setValueHandler={setTodayCost} value={todayCost} />
      </FieldContainer>
      <FieldContainer>
        <ButtonInputContainer
          getValue={() => {
            return todayCost;
          }}
          setValueHandler={setTodayCost}
          values={goalOptions}
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
        <h3>Lump Sum Investments: </h3>
        <NumberInput setValueHandler={setLumpSumInvestment} value={lumpSumInvestment} label="Lump sum" />
      </FieldContainer>

      <FieldContainer>
        <CalculateButton>Calculate</CalculateButton>
      </FieldContainer>
    </CalculatorContainer>
  );
};

export default AspireBig;
