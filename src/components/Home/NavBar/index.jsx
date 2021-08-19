import React from "react";
import Logo from "../../Global/Logo/index.jsx";
import "./styles.scss";

export default class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar-home">
        <ul>
          <li className="items-left">
            <a href="/">
              <Logo />
            </a>
          </li>

          <li className="items-right">
            <div>
              <a href="/login">Login</a>
            </div>
            <div>
              <a href="/register"> Cadastro</a>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}
