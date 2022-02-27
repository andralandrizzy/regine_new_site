import React, { useEffect, useState } from "react";
import logo from '../../images/rlogo.png'
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  ImgLogo
} from "./NavbarElements";

const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = ()=> {
    if (window.scrollY >= 80){
      setScrollNav(true)
    } else{
      setScrollNav(false)
    }
  };

  useEffect(()=> {
    window.addEventListener('scroll', changeNav)
  },[]);


  const toggleHome = ()=>{
    scroll.scrollToTop();
  }
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <ImgLogo src={logo} alt="site logo"/>
          </NavLogo>
          <MobileIcon onClick={toggle}>
              <FaBars/>
          </MobileIcon>
          <NavMenu>
              < NavItem>
                <NavLinks to="services" smooth={true} duration={500} spy={true} exact = 'true' offset={-80}>Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="about" smooth={true} duration={500} spy={true} exact = 'true' offset={-80}>About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="blog" smooth={true} duration={500} spy={true} exact = 'true' offset={-80}>Blog</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="contact" smooth={true} duration={500} spy={true} exact = 'true' offset={-80}>Contact</NavLinks>
              </NavItem>
          </NavMenu>
          <NavBtn>
              <NavBtnLink to="/login">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
