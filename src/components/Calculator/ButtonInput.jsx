import React, { useState } from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
const Button = styled.button`
  box-shadow: 0;
  border-syle: solid;
  border-width: 1px;
  padding: 10px;
  margin: 0 10px;
  width: 100px;
  border-color: ${(props) => (props.active ? "#001E6C" : "#C8C6C6")};
  :focus,
  :active {
      box-shadow: none;

  }
`;

const ButtonInput = (props) => {


  return (
    <Button active={props.value === props.getValue()} onClick={() => props.setValue(parseInt(props.value))} className="btn ">
      {props.text}
    </Button>
  );
};

const ButtonInputContainer = (props) => {
  return (
    <ButtonContainer >
      {props.values.map((value, index) => {
        return <ButtonInput getValue={props.getValue} setValue={props.setValueHandeler} key={index} text={value.text} value={value.value} />;
      })}
    </ButtonContainer>
  );
};

export default ButtonInputContainer;
