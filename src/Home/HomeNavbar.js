import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const HomeNavbar = () => {
  return (
    <Navbar
      style={{
        backgroundColor: "#342E30",
        justifyContent: "center",
        filter: "contrast(98%)"
      }}
    >
      <NavbarBrand
        style={{
          color: "white",
          textShadow: "0.1em 0.1em #A37CBE",
          fontSize: "4em",
          fontWeight: "bold"
        }}
      >
        Reverb
      </NavbarBrand>
    </Navbar>
  );
};

export default HomeNavbar;
