import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
// import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";

import Logout from "../Auth/Logout/Logout";
import "./Navbar.css";

const Sitebar = props => {
  // const [isOpen, setIsOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Navbar
      style={{ backgroundColor: "#A37CBE", justifyContent: "space-between" }}
      light
      // expand="md"
    >
      <img
        src={require("../assets/UpdatedReverLogo.png")}
        className="logo"
        style={{ borderRadius: "40px" }}
      />
      <NavbarBrand href="/" style={{ fontSize: "2em", textAlign: "center" }}>
        Reverb: Concert Reviews
      </NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} className="mr-2" />
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink href="/">Review concerts!</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/ticketmasterindex">
              Search upcoming concerts!
            </NavLink>
          </NavItem>
          <NavItem>
            <Logout setSession={props.setSession} />
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Sitebar;
