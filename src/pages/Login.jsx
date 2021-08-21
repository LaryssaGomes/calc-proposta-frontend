import React from "react";
import Background from "../components/LoginRegister/Background";
import FormLogin from "../components/LoginRegister/FormLogin";
import { login } from "../api/auth";
import API from "../api/api.jsx";
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      err: false,
    };
    this.api = new API();
  }

  loginAccount(dados) {
    try {
      const response = this.api.post("/sessions", dados); //Mandando os dados
      login(response.data.token); // Pegando o token e colocando no header
      this.props.history.push("/app"); // Ir para outra pagina
    } catch (err) {
      this.setState({
        err: true,
      });
    }
  }
  render() {
    return (
      <>
        <Background
          form={<FormLogin loginAccount={this.loginAccount} />}
          err={this.state.err}
        />
      </>
    );
  }
}
