import React from "react";
import ImgLogo from "../../img/logo-omega.png";
import ImgLogin from "../../img/login-register.jpg";
import "./styles.scss";
export default class Background extends React.Component {
  render() {
    return (
      <>
        <div className="background"></div>
        <div className="logo">
          <div>
            <img src={ImgLogo} />
          </div>
          <div>
            <p>Omega</p>
          </div>
        </div>
        <div className="background-container">
          <div>
            <img src={ImgLogin} />
          </div>
          <div className="form">{this.props.form}</div>
        </div>
      </>
    );
  }
}
