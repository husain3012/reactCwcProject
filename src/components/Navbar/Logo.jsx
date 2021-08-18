import styled from "styled-components";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const LogoImg = styled.div`
  width: 64px;
  height: 64px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoText = styled.h1`
  ${'' /* font-size: 18px; */}
  margin: 0;
  font-weight: 500;
  color: #FFF;
`;

export const Logo = (props) => {
  return (
    <>
    <LogoWrapper>
      <LogoImg>
        <img src={props.logo} alt="logo" />
      </LogoImg>
      <LogoText>{props.text}</LogoText>
    </LogoWrapper>
    </>
  );
};
