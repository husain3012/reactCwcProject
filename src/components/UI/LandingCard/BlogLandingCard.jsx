import React from "react";
import styled from "styled-components";

const BlogCardContainer = styled.div`
  width: 100%;
  height: 40vh;
  background-image: url(${(props) => props.cover});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.2);
  background-blend-mode: multiply;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.div`
  padding: 20px 5%;

  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);

  border-radius: 2px;
  text-align: center;
  h1 {
    color: #11052c;
    font-size: 2.5rem;
  }
  h6 {
    font-weight: 400;
    color: var(--green);
  }
`;
// const SubHeading = styled.h2``;

const BlogLandingCard = (props) => {
  return (
    <div>
      <BlogCardContainer cover={props.cover}>
        <Heading>
          <h1>{props.heading}</h1> <h6>{props.subHeading}</h6>
        </Heading>
      </BlogCardContainer>
    </div>
  );
};

export default BlogLandingCard;
