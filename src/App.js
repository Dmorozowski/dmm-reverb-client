import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Sitebar from "./Home/Navbar";
import Auth from "./Auth/Auth";
import ConcertIndex from "./Concerts/ConcertIndex";
import HomeNavbar from "./Home/HomeNavbar";
import Home from "./Home/Home";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [sessionToken, setSessionToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  const updateToken = newToken => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };

  const protectedViews = () => {
    return sessionToken ? (
      <Home token={sessionToken} />
    ) : (
      <Auth updateToken={updateToken} />
    );
  };

  const whichNavbar = () => {
    return sessionToken ? (
      <Sitebar setSession={setSessionToken} />
    ) : (
      <HomeNavbar updateToken={updateToken} />
    );
  };
  return (
    <div className="App">
      {whichNavbar()}
      {protectedViews()}
      <br />
      {/* <Router> */}
      {/* <Sitebar /> */}
      {/* <Home token={sessionToken} /> */}
      {/* </Router> */}
    </div>
  );
}

export default App;
