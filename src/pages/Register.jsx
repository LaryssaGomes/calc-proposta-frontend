import React from "react";
import Background from "../components/LoginRegister/Background";
import FormRegister from "../components/LoginRegister/FormRegister";
import API from "../api/api.jsx";
export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      err: false,
      success: false,
      proposal: [],
    };
    this.api = new API();
  }

  createNewAccount(dados) {
    // Aqui Alterar
    this.api.post("/currer", dados, (dados) => {
      alert("Conta adicionada com sucesso");
    });
  }
  render() {
    return (
      <>
        <Background
          form={<FormRegister createNewAccount={this.createNewAccount} />}
          err={this.state.err}
          success={this.state.success}
        />
      </>
    );
  }
}
