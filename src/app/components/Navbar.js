import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const NavWrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a1a1a;
  padding: 2rem 0;
`;

const NavItem = styled.li`
  display: inline-block;
  color: #fff;
  margin: 0 2rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const Navbar = () => {
  return (
    <NavWrapper>
      <ul>
        <Link to="/">
          <NavItem>Planets</NavItem>
        </Link>

        <Link to="starships">
          <NavItem>Starships</NavItem>
        </Link>

        <Link to="vehicles">
          <NavItem>Vehicles</NavItem>
        </Link>
      </ul>
    </NavWrapper>
  );
};
