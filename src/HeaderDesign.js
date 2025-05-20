
import styled, { createGlobalStyle } from "styled-components";


export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  margin: 0 auto;
  width: 97%;
`;
export const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: #6b4a2e;
    color: #fff;
  }
`;
export const Dropdown = styled.div`
  display: none;
  position: absolute;
  top: 2.5rem;
  left: 0;
  background:rgb(255, 255, 255);
  min-width: 180px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  border-radius: 0.5rem;
  padding: 0.5rem 0;
  z-index: 2000;
  color: white;
 
  a {
    display: block;
    padding: 0.5rem 1.5rem;
    text-decoration: none;
    font-weight: 500;
    border-radius: 0.375rem;
    color:#fff;

    &:hover {
      background: #6b4a2e;
      color: #fff;
    }
  }
`;
export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`;
export const MenuIcon = styled.div`
  display: block;
  cursor: pointer;
  color: #6b4a2e;
  margin-right: 1rem; // Move the menu icon a little to the left

  @media (min-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color:white;

  &:hover > ${Dropdown},
  ${Dropdown}:hover {
    display: block;
    color:white;
  }
`;
export const MobileNav = styled.div`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  align-items: flex-start;
  background: white;
  position: absolute;
  top: 100%;
  left: 0;
  width: 95%;
  padding: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  z-index: 999;

  a {
    font-size: 0.875rem;
    font-weight: 600;
    color: #6b4a2e;
    margin-bottom: 1rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  button {
    margin-top: 1rem;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const ClinicName = styled.span`
  color: #6b4a2e;
  font-weight: 600;
  font-size: 0.875rem;
  letter-spacing: 0.05em;
  user-select: none;
`;
export const ContactButton = styled.button`
  display: none;

  @media (min-width: 768px) {
    display: block;
    background-color: #6b4a2e;
    color: white;
    font-size: 0.625rem;
    font-weight: 600;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    border: none;
    cursor: pointer;
  }
`;
export const Nav = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
    font-size: 0.625rem;
    font-weight: 600;
    color: #6b4a2e;
    letter-spacing: 0.05em;

    a {
      color: #6b4a2e;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;