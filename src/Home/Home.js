import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ConcertIndex from "../Concerts/ConcertIndex";
import TicketmasterIndex from "../TicketmasterApi/TicketmasterIndex";

const HomeLink = props => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ConcertIndex token={props.token} />
        </Route>
        <Route exact path="/ticketmasterindex">
          <TicketmasterIndex token={props.token} />
        </Route>
      </Switch>
    </Router>
  );
};

export default HomeLink;
