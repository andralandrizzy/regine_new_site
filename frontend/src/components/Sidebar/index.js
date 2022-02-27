import React from "react";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {/* <SidebarLink to="home">Home</SidebarLink> */}
          <SidebarLink onClick={toggle} to="about">About</SidebarLink>
          <SidebarLink onClick={toggle} to="services">Services</SidebarLink>
          <SidebarLink onClick={toggle} to="blog">Blog</SidebarLink>
          <SidebarLink onClick={toggle} to="contact">Contact</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/login">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
