import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import { Accordion } from "react-bootstrap";
import Solution1 from "./Solution1";
import Solution2 from "./Solution2";
import Solution3 from "./Solution3";
import Solution4 from "./Solution4";

export const SolutionsWrapper = styled.div`
  max-width: 100ch;
  margin: auto;
  background-color: #f5f5f5;
  padding: 0 5%;
  padding-bottom: 50px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    max-width: 100vw;
  }
`;

const ArticleHeading = styled.div`
  background-color: ${(props) => props.bgColor || "#e1e8eb"};
  color: ${(props) => props.color || "#343a40"};
  padding: 2rem 5%;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
`;
const ArticleInfo = styled.div`
  background: ${(props) => props.bgColor || "rgba(255, 193, 79, 0.7)"};
  border: 1px solid #47cbb0;
  display: flex;
  border-radius: 5px;
  border-color: transparent;
  width: 80%;
  margin: auto;
  transform: translateY(-50%);
  padding: 1rem;
  justify-content: center;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
`;

export const ArticleBody = styled.div`
  margin: 1rem;
  padding: 2rem 0;
`;
export const ReactPlayerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 3em auto;
`;

const Solution = (props) => {
  console.log(props);
  return (
    <div>
      <SolutionsWrapper>
        <ScrollAnimation animateIn="fadeIn">
          <ArticleHeading color={props.heading.color} bgColor={props.heading.bgColor}>
            <h1>{props.heading.title}</h1>
          </ArticleHeading>
          <ArticleInfo bgColor={props.heading.infoBg}>{props.heading.info}</ArticleInfo>
        </ScrollAnimation>

        {props.bodyHtml.map((item) => (
          <ArticleBody>
            {item} <hr />
          </ArticleBody>
        ))}
      </SolutionsWrapper>

      <SolutionsWrapper>
        <ArticleBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repreisentatius voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga
          <Accordion flush defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Accordion Item #1</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </ArticleBody>
      </SolutionsWrapper>
    </div>
  );
};

export {Solution1, Solution2, Solution3, Solution4};

export default Solution;
