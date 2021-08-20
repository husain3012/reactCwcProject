import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import ScrollAnimation from "react-animate-on-scroll";
import { Accordion } from "react-bootstrap";
const SolutionsWrapper = styled.div`
  max-width: 80%;
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
  background-color: #04009a;
  background-color: #e1e8eb;
  color: #343a40;
  padding: 2rem 5%;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
`;
const ArticleInfo = styled.div`
  border: 1px solid #47cbb0;
  display: flex;
  background-color: #ffc107;
  border-radius: 5px;
  border-color: transparent;
  width: 80%;
  margin: auto;
  transform: translateY(-50%);
  padding: 1rem;
  justify-content: center;
  background: rgba(255, 193, 79, 0.7);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
`;
const ArticleBody = styled.div`
  margin: 1rem;
  padding: 2rem 0;
`;
const ReactPlayerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 3em auto;
`;


const Solution = (props) => {
  return (
    <div>
      <SolutionsWrapper>
        <ScrollAnimation animateIn="fadeIn">
          <ArticleHeading>
            <h1>Lorem Ipsum </h1>
          </ArticleHeading>
          <ArticleInfo> 5 years | 10% growth | Lorem Ipsum </ArticleInfo>
        </ScrollAnimation>

        <ArticleBody>
          <ScrollAnimation animateIn="fadeIn">
            <h2>Hello WOrld</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga
              praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt
              quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed
              quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
            </p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
            <ReactPlayerWrapper>
              <ReactPlayer className="m react-player" url="https://youtu.be/p7HKvqRI_Bo" />
            </ReactPlayerWrapper>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
            <h3>Conclusion</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga
              praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt
              quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed
              quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
            </p>
          </ScrollAnimation>
        </ArticleBody>
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

export default Solution;
