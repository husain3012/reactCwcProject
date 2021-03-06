import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { useState } from "react";
import { MenuToggle } from "./menuToggle";
import Fade from "react-reveal/Fade";
// export const Nav = styled.nav
const LinkWrapper = styled.div`
  flex-direction: column;
  width: 100%;
  background-color: #000;
  padding: 10px 20px;
  position: fixed;
  top: 60px;
  left: 0;
`;

const NavMenu = styled.div`
  width: 100%;
  display: flex;
  ${"" /* align-items: center; */}
  ${"" /* justify-content: center; */}
  flex: 2;
  width: 100%;
  flex-direction: column;
`;



// export const Nav = styled.nav`
// background: #012443;
// height: 80px;
// display: flex;
// justify-content: space-between ;
// padding: 0.5rem calc((100vw-1000px)/2);
// z-index: 100;
// `;

const NavLink = styled(Link)`
  color: #e6e3ed;
  display: flex;
  text-decoration: none !important;
  padding: 0 1rem;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border-bottom: 2px solid transparent;
  justify-content: center;
  align-items: center;
  min-height: 64px;

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

const NavBtnLinkFirst = styled(Link)`
  text-decoration: none !important;
  border-radius: 2px;
  padding: 10px 22px;
  margin: 5px;
  justify-content: center;
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

const NavBtnLinkSecond = styled(Link)`
  text-decoration: none !important;
  border-radius: 2px;
  background: transparent;
  display: flex;
  padding: 10px 22px;
  justify-content: center;
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

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <>
      <MenuToggle isOpen={isOpen} toggle={toggleMenu} />
      {isOpen && (
        <LinkWrapper>
          <Fade animationIn="fadeIn" animationOut="fadeOut" isVisible={isOpen}>
            <NavMenu>
              <NavLink onClick={toggleMenu} to="/about" activeStyle>
                About
              </NavLink>
              <NavLink onClick={toggleMenu} to="/contact_us" activeStyle>
                Contact Us
              </NavLink>
              <NavBtnLinkSecond onClick={toggleMenu} to="/signup" activeStyle>
                Log in
              </NavBtnLinkSecond>
              <NavBtnLinkFirst onClick={toggleMenu} to="/signup">
                Sign Up
              </NavBtnLinkFirst>
            </NavMenu>
          </Fade>
        </LinkWrapper>
      )}
    </>
  );
};

export default NavbarMobile;
