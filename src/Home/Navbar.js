import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { Route, Link, Switch } from "react-router-dom";
import Logout from "../Auth/Logout/Logout";
import "./Navbar.css";
import FindConcerts from "../ConcertApi/FindConcerts";
import { BrowserRouter as Router } from "react-router-dom";

const Sitebar = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
  };
  return (
    <Navbar
      style={{ backgroundColor: "#AAE2DB", justifyContent: "space-between" }}
      light
      expand="md"
    >
      <img src={require("../assets/UpdatedReverLogo.png")} className="logo" />
      <NavbarBrand href="/" style={{ fontSize: "3em", textAlign: "center" }}>
        Reverb: Concert Reviews
      </NavbarBrand>
      <Logout setSession={props.setSession} />
      <Router>
        <ul className="findThings">
          <li>
            <Link to="/findconcerts">Search For Concerts</Link>
          </li>
        </ul>

        <div className="concert-route">
          <Switch>
            <Route exact path="/findconcerts">
              <FindConcerts />
            </Route>
          </Switch>
        </div>
      </Router>
    </Navbar>
  );
};

export default Sitebar;
