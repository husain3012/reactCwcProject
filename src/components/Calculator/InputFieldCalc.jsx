import React, { useState } from "react";
import styled from "styled-components";

export const FieldContainer = styled.div`
  display: flex;
  padding: 20px 1rem;
  width: 60ch;
  justify-content: space-between;
  align-items: center;
  border-style: none none solid;
  border-color: #e6e6e6;
  border-width: 1px;
  h3 {
    color: #11052c;
    font-size: 1.3rem;
    width: 50%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 90vw;
    h3 {
    text-align: center;
    width: 100%;
  }
  }
`;

export const CalculateButton = styled.button`
  background-color: #035397;
  margin: 0 auto;
  color: white;
  border-radius: 5px;
  border-style: none;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: #001E6C;
  }
`;
