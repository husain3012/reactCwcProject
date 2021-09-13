import React from "react";
import styled from "styled-components";
import { FloatingLabel, Form } from "react-bootstrap";

const NumericInput = styled(Form.Control)`
  border-style: solid;
  padding: 5px 10px;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 3px;
  transition: border-color 0.2s ease-in-out;

  margin-left: auto;
  &:active,
  &:focus {
    box-shadow: none;
    outline: none;
    border-color: #000;
    transition: border-color 0.2s ease-in-out;
  }
`;

const FloatingLabelResp = styled(FloatingLabel)`
  @media (max-width: 768px) {
    margin: 1rem auto;
  }
`;

const NumberInput = (props) => {
  return (
    <>
      <FloatingLabelResp label={props.label}>
        <NumericInput  onChange={props.handleInput} value={props.value} placeholder={props.label} type="number" />
      </FloatingLabelResp>
    </>
  );
};

export default NumberInput;
