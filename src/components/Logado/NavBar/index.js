import React from "react";
import "./styles.scss";
import { AiOutlineHome, AiOutlineLogout, AiFillCopy } from "react-icons/ai";
import { BsFileEarmarkText } from "react-icons/bs";

export default class NavBar extends React.Component {
  render() {
    return (
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
    );
  }
}
