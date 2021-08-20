import React from "react";
import "./styles.scss";
import Logo from "../../Global/Logo/index.jsx";

// Icons
import { AiOutlineHome, AiOutlineLogout } from "react-icons/ai";
import { BsFileEarmarkText } from "react-icons/bs";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsChange: null,
      itemsNav: "nav",
      itemsChangeBg: "menu-bg",
    };
  }

  menuOnClick = (event) => {
    if (this.state.itemsChange == null) {
      this.setState({
        itemsChange: "change",
        itemsNav: "change ",
        itemsChangeBg: "change-bg menu-bg",
      });
    } else {
      this.setState({
        itemsChange: null,
        itemsNav: "nav",
        itemsChangeBg: "menu-bg",
      });
    }
  };
  render() {
    return (
      <div className="container">
        <div className="navigation">
          <ul>
            <li className="list">
              <b></b>
              <b></b>
              <a href="/homelogado">
                <span className="icon">
                  <AiOutlineHome />
                </span>
                <span className="title">Home</span>
              </a>
            </li>
            <li className="list">
              <b></b>
              <b></b>
              <a href="/registerproposal">
                <span className="icon">
                  <BsFileEarmarkText />
                </span>
                <span className="title">Adicionar</span>
              </a>
            </li>
            <li className="list">
              <b></b>
              <b></b>
              <a href="/homelogado">
                <span className="icon">
                  <AiOutlineLogout />
                </span>
                <span className="title">Sair</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="navigation-hamburguer">
          <div id="menu">
            <div
              id="menu-bar"
              className={this.state.itemsChange}
              onClick={this.menuOnClick}
            >
              <div id="bar1" className="bar"></div>
              <div id="bar2" className="bar"></div>
              <div id="bar3" className="bar"></div>
            </div>
            <nav className={this.state.itemsNav} id="nav">
              <div id="ul">
                <span id="li">
                  <a href="/homelogado">Home</a>
                </span>
                <span id="li">
                  <a href="/registerproposal">Adicionar</a>
                </span>
                <span id="li">
                  <a href="/#">Sair</a>
                </span>
              </div>
            </nav>
          </div>
          <div className={this.state.itemsChangeBg} id="menu-bg"></div>
        </div>
        <Logo />
        <div className="item-reight">
          <div id="items">{this.props.itemReight}</div>
        </div>
      </div>
    );
  }
}
