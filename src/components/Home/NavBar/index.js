import React from "react";
import LogoOmega from "../../img/logo-omega.png";
import "./styles.scss";

export default class NavBar extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li className="items-left">
            <a href="/">
              <div className="logo">
                <div>
                  <img src={LogoOmega} />
                </div>
              </div>
              <div className="logo-text">Omega</div>
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
