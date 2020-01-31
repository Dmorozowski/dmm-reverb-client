import React from "react";
import LogoutPic from "../../assets/logout.png";

const Logout = props => {
  return (
    <div>
      <img
        onClick={() => props.setSession(localStorage.removeItem("token"))}
        id="logout"
        className="logout"
        src={LogoutPic}
        alt="exit"
      />
    </div>
  );
};

export default Logout;
