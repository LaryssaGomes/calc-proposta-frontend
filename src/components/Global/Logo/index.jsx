import React from "react";
import ImgLogo from "../../../assets/img/logo-omega.png";
import "./styles.scss";
export default class Logo extends React.Component {
  render() {
    return (
      <div className="logo-omega">
        <div>
          <img src={ImgLogo} alt="logo" />
        </div>
        <div className="logo-name">
          <p>Omega</p>
        </div>
      </div>
    );
  }
}
