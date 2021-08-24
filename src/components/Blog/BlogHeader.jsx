import React from "react";
import styled from "styled-components";

const BlogHeaderContainer = styled.div`
  width: 100%;
  height: 40vh;
  background-image: url(${(props) => props.cover});
  ${"" /* background-size: cover; */}
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BlogHeading = styled.div`
  padding: 20px 5%;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border-radius: 2px;
  text-align: center;
  h1 {
    color: #11052c;
  }
  h6 {
    color: #464660;
  }
`;
const BlogSubHeading = styled.h2``;

const BlogHeader = (props) => {
  return (
    <div>
      <BlogHeaderContainer cover={props.cover}>
        <BlogHeading>
          <h1>{props.heading}</h1> <h6>{props.subHeading}</h6>
        </BlogHeading>
      </BlogHeaderContainer>
    </div>
  );
};

export default BlogHeader;
