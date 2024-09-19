import React from "react";
import pageLogo from "../images/Logo-white.svg";

export default function Header() {
  return (
    <header className="header">
      <img src={pageLogo} className="header__logo" alt="Page logo" />
      <hr className="header__line" />
    </header>
  );
}
