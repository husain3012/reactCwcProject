import React from "react";
import { makeStyles, withStyles} from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import styled from "styled-components";


const PrettoSlider = withStyles({
    root: {
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '1px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);


const SliderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  padding: 0 1rem;
  @media (max-width: 768px) {
      width: 100%;
  }
`;


const SlideElementContainer = styled.div`
display: flex;
width: 80%;
align-items: center;

`;





const SliderInput = (props) => {
  function valuetext(value) {
    return `${value} Yrs`;
  }
const handleChange = (event, newValue) => {
  props.setValueHandeler(newValue);
}


  return (<>
    <SliderContainer>
      <span>{props.min}</span>
      <SlideElementContainer>
      <PrettoSlider value={props.value} onChange={handleChange} defaultValue={props.defaultValue || 50} getAriaValueText={valuetext} aria-labelledby="discrete-slider" valueLabelDisplay="auto"   min={props.min} max={props.max} />
      </SlideElementContainer>
      <span>{props.max}</span>
    </SliderContainer>
    </>
  );
};

export default SliderInput;
