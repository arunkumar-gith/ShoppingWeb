import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 10px 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    position: relative;
  }
`;

const Logo = styled.img`
  width: 150px;
  height: auto;
  color: white;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  color: white;
  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    background-color: #333;
    width: 100%;
    padding: 20px;
    display: ${({ isMenuOpen }) => (isMenuOpen ? "block" : "none")};
  }
`;

const MenuItem = styled.li`
  margin-right: 20px;
  color: white;
  @media (max-width: 768px) {
    margin: 0 0 10px;
  }
`;

const MenuIcon = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavbarContainer>
      <Logo src="your-logo.png" alt="Logo" />
      <MenuIcon onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </MenuIcon>
      <Menu isMenuOpen={isMenuOpen}>
        <MenuItem>Home</MenuItem>
        <MenuItem>Category</MenuItem>
        <MenuItem>Mens</MenuItem>
        <MenuItem>Womens</MenuItem>
      </Menu>
    </NavbarContainer>
  );
};

export default Navbar;
