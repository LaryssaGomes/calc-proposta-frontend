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

    this.loadingProposals();
  }

  loadingProposals() {
    // Aqui Altera url
    this.api.get("/user", (proposal) => {
      const newState = [...this.state.proposal, proposal];
      this.setState(newState);
    });
  }

  remove(idProposal) {
    this.api.delete(`/delete/${idProposal}`, (data) => {
      alert("Proposta foi removida con sucesso");
      this.loadingProposals();
    });
  }

  contract(idProposal) {
    console.log(idProposal);
  }

  render() {
    return (
      <>
        <NavBar />
        <CardProposal
          proposals={this.state.proposal}
          removeProposal={this.remove.bind(this)}
          contractProposal={this.contract.bind(this)}
        />
      </>
    );
  }
}
