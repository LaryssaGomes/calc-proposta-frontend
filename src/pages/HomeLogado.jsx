import React from "react";
import NavBar from "../components/Logado/NavBar";
import CardProposal from "../components/Logado/Card";
import API from "../api/api.jsx";
export default class HomeLogado extends React.Component {
  constructor() {
    super();

    this.api = new API();

    this.state = {
      proposal: [],
    };

    this.carregandoPropostas();
  }

  carregandoPropostas() {
    this.api.get("/user", (contas) => {
      const novoEstado = [...this.state.proposal];
      this.setState(novoEstado);
    });
  }

  render() {
    return (
      <>
        <NavBar />
        <CardProposal />
      </>
    );
  }
}
