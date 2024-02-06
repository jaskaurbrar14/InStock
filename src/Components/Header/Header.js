import React from "react";
import InstockLogo from "../../assets/Logo/InStock-Logo_1x.png";

import "./Header.scss";

const Header = () => {
  return (
    <main className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <img src={InstockLogo} className="header__image" alt="InstockImage" />
        </div>
      </div>
    </main>
  );
};

export default Header;
