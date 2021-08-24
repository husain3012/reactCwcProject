import React from "react";
import styled from "styled-components";
const TextContainer = styled.div`
  max-width: 75ch;
  margin: 0 auto;
  font-size: 1.1em;
  padding: 2rem;
  padding-top: 50px;
  background-color: #f9f9f9;
  p {
    color: #716f81;
  }
  img {
    max-width: 80%;
    max-height: 300px;
    padding: 0.5em;
    display: block;
  }
`;

const BlogText = (props) => {
  return (
    <div>
      <TextContainer>
       {props.content}
      </TextContainer>
    </div>
  );
};

export default BlogText;
