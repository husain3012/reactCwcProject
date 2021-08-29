import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

// export const Nav = styled.nav

export const NavBarContainer = styled.div`
  background-color: ${(props) => props.color || "#04009a"};
  width: 100%;
  height: 60px;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5em;
  position: fixed;
  top: 0;
  z-index: 1200;
  transition: 0.3s;
`;

export const NavBrand = styled(Link)`
  text-decoration: none !important;
  display: flex;
`;
export const NavMenu = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 2;
`;

export const NavRight = styled.div`
  display: flex;
`;

// export const Nav = styled.nav`
// background: #012443;
// height: 80px;
// display: flex;
// justify-content: space-between ;
// padding: 0.5rem calc((100vw-1000px)/2);
// z-index: 100;
// `;

export const NavLink = styled(Link)`
  color: #e6e3ed;
  display: flex;
  align-items: center;
  text-decoration: none !important;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border-bottom: 2px solid transparent;

  &.active {
    color: #47cbb0;
    border-bottom: 2px solid #47cbb0;
  }
  &:hover {
    color: #47cbb0;
    border-bottom: 2px solid #47cbb0;

    transition: all 0.3s ease-in-out;
  }
`;

export const NavBtnLinkFirst = styled(Link)`
  text-decoration: none !important;
  border-radius: 2px;
  padding: 10px 22px;
  margin: 5px;
  max-height: 40px;
  align-items: center;
  display: flex;
  color: #012443;
  border: none;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  background-size: 300% 100%;
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  background-image: linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673);
  box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);
  &:hover {
    color: black;
    background-position: 100% 0;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
`;

export const NavBtnLinkSecond = styled(Link)`
  text-decoration: none !important;
  border-radius: 2px;
  background: transparent;
  max-height: 40px;
  align-items: center;
  display: flex;
  padding: 10px 22px;
  margin: 5px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.3s ease-in-out;
    color: #012443;
    background: #fff;
  }
`;
