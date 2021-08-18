// import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'
import { NavBarContainer, NavBrand, NavMenu, NavRight, NavLink, NavBtnLinkFirst, NavBtnLinkSecond } from "./NavbarElements";
import NavbarMobile from "./NavbarMobile";
import { Logo } from "./Logo";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: "767px" });

  return (
    <>
      <NavBarContainer>
        <NavBrand to="/">
          <Logo logo="/assets/brandlogo.png" text="Brand" />
        </NavBrand>
        {!isMobile && (
          <NavMenu>
            <NavLink to="/about" activeStyle>
              About
            </NavLink>
            <NavLink to="/contact_us" activeStyle>
              Contact Us
            </NavLink>
          </NavMenu>
        )}
        {!isMobile && (
          <NavRight>
            <NavBtnLinkSecond to="/signup" activeStyle>
              Log in
            </NavBtnLinkSecond>
            <NavBtnLinkFirst to="/signup">Sign Up</NavBtnLinkFirst>
          </NavRight>
        )}
        {isMobile && <NavbarMobile />}
      </NavBarContainer>
    </>
  );
};
export default Navbar;
