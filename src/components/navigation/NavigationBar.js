import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/UserContext";
import "./NavigationBar.scss";

function NavigationBar(props) {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="navigation">
      <Link className="logo-container" to="/">
        <CrownLogo className="crown-logo" />
      </Link>

      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          SHOP
        </Link>

        <Link className="nav-link" to="/hats">
          Hats
        </Link>

        <Link className="nav-link" to="/sign-in">
          {currentUser ? "Sign Out" : "Sign In"}
        </Link>
      </div>
    </div>
  );
}

export default NavigationBar;
