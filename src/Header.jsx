import React, { useState } from "react";
import {
  Header,
  LogoWrapper,
  Logo,
  ClinicName,
  Nav,
  NavLink,
  ContactButton,
  MenuIcon,
  MobileNav,
  NavItem, Dropdown
} from "./HeaderDesign";
import logo from "./1 (1).png";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom"; // Add this import

const HeaderSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // Add this line

  return (
    <Header>
      <LogoWrapper>
        <Logo src={logo} alt="Logo of Dr. A Dental Clinic" />
        <ClinicName>DR. A DENTAL CLINIC</ClinicName>
      </LogoWrapper>

      <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </MenuIcon>

      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavItem>
          <NavLink href="/#services">Services</NavLink>
          <Dropdown>
            <a href="#general">General Services</a>
            <a href="#specialized">Specialized</a>
            <a href="#cosmetic">Cosmetic Dentistry</a>
            {/* Add more as needed */}
          </Dropdown>
        </NavItem>
        <NavLink href="/know-us">Know us</NavLink>
      </Nav>

      <MobileNav open={menuOpen}>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/#services">Services</NavLink>
        <NavLink href="/know-us">Know us</NavLink>
        <ContactButton onClick={() => navigate("/contact-us")}>Contact Us</ContactButton>
      </MobileNav>

      <ContactButton className="desktop-only" onClick={() => navigate("/contact-us")}>
        Contact Us
      </ContactButton>
    </Header>
  );
};

export default HeaderSection;