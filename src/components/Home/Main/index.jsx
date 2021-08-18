import React from "react";
import ImgHome from "../../../assets/img/home.jpg";
import "./main-styles.scss";
export default class Main extends React.Component {
  render() {
    return (
      <div className="main-container">
        <div className="main-text">
          <div className="title">
            <h3>Seja bem-vindo a plataforma</h3>
          </div>
          <div className="descrition">
            Provide a network for all your needs with ease and fun using
            LaslesVPN discover interesting features from us.
          </div>
          <div className="button">
            <a>Venha nós conhecer</a>
          </div>
        </div>
        <div>
          <img src={ImgHome} />
        </div>
      </div>
    );
  }
}
