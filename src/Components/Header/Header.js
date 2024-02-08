import React from "react";
import InstockLogo from "../../assets/Logo/InStock-Logo_1x.png";
import {Link} from "react-router-dom";
import InventoryList from "../InventoryList/InventoryList";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <img src={InstockLogo} className="header__image" alt="InstockImage" />
        </div>

        <div className="header__navlinks">
          <ul className="header__navitems">
            <li className="header__warehouses">Warehouses</li>
            <Link to="/inventorylist"><li className="header__inventory">Inventory</li></Link>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
