import React from "react";
import ImgLogo from "../../../assets/img/logo-omega.png";
import ImgLogin from "../../../assets/img/login-register.jpg";
import { Alert } from "react-bootstrap";
import "./styles.scss";
export default class Background extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }
  render() {
    return (
      <>
        <div className="background"></div>
        <div className="barra-menu">
          {this.props.success ? (
            <Alert
              className={this.state.show ? "false-alert" : "true-alert"}
              variant="success"
              onClose={() => this.setState({ show: (this.state.show = false) })}
              dismissible
            >
              <p>Dados salvos com sucesso</p>
            </Alert>
          ) : (
            ""
          )}
          {this.props.err ? (
            <Alert
              className={this.state.show ? "false-alert" : "true-alert"}
              variant="danger"
              onClose={() => this.setState({ show: (this.state.show = false) })}
              dismissible
            >
              <p>Error ao salvar dados de usuário</p>
            </Alert>
          ) : (
            ""
          )}
          <div className="logo">
            <div>
              <img src={ImgLogo} alt="logo" />
            </div>
            <div>
              <p>Omega</p>
            </div>
          </div>
        </div>
        <div className="background-container">
          <div>
            <img src={ImgLogin} alt="login" />
          </div>
          <div className="form">{this.props.form}</div>
        </div>
      </>
    );
  }
}
