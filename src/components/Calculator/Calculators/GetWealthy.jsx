import React, { useState } from "react";
import { CalculateButton, FieldContainer } from "../InputFieldCalc";
import NumberInput from "../NumberInput";
import SliderInput from "../SliderInput";
import ButtonInputContainer from "../ButtonInput";
import CalculatorContainer from "../CalculatorContainer";

const GetWealthy = (props) => {
  const [years, setYears] = useState(props.years);
  const [lumpSumInvestment, setLumpSumInvestment] = useState(props.lumpSumInvestment);
  const [monthlySip, setMonthlySip] = useState();
  const [annualReturn, setAnnualReturn] = useState();

  const monthlySipOptions = [
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

  const yearsOptions = [
    {
      text: "10",
      value: 10,
    },
    {
      text: "20",
      value: 20,
    },
    {
      text: "30",
      value: 30,
    },
    {
      text: "40",
      value: 40,
    },
    {
      text: "50",
      value: 50,
    },
  ];
  return (
    <CalculatorContainer>
      <FieldContainer>
        <h3>No. Of Years</h3>
        <NumberInput label="Years" setValueHandler={setYears} value={years} />
      </FieldContainer>
      <FieldContainer>
        <ButtonInputContainer
          getValue={() => {
            return years;
          }}
          setValueHandler={setYears}
          values={yearsOptions}
        />
      </FieldContainer>

      <FieldContainer>
        <h3>Monthly SIP (₹):</h3>
        <NumberInput label="SIP" setValueHandler={setMonthlySip} value={monthlySip} />
      </FieldContainer>
      <FieldContainer>
        <ButtonInputContainer
          getValue={() => {
            return monthlySip;
          }}
          setValueHandler={setMonthlySip}
          values={monthlySipOptions}
        />
      </FieldContainer>

      <FieldContainer>
        <h3>Lump Sum Investment (₹): </h3>
        <NumberInput setValueHandler={setLumpSumInvestment} value={lumpSumInvestment} label="Lump Sum" />
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

export default GetWealthy;
