import React from "react";
import { Link, NavLink } from "react-router-dom";
import i18n from "../i18n";
import { withNamespaces } from "react-i18next";

const Navbar = ({ t }) => {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        {t("brand")}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link">
              {t("myNotes")}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/add" className="nav-link">
              {t("addNote")}
            </NavLink>
          </li>

          <li className="nav-item dropdown">
            <button
              className="btn nav-link dropdown-toggle btn-link"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Language / Язык
            </button>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <button
                className="dropdown-item"
                onClick={() => changeLanguage("en")}
              >
                English
              </button>

              <button
                className="dropdown-item"
                onClick={() => changeLanguage("ru")}
              >
                Русский
              </button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withNamespaces()(Navbar);
