import React from "react";
import NavBar from "../components/Logado/NavBar";
import FormRegisterProposal from "../components/Logado/FormRegisterProposal";
export default class RegisterProposal extends React.Component {
  render() {
    return (
      <>
        <NavBar
          itemReight={
            <FormRegisterProposal
              createNewProposal={this.createNewProposal}
              value={this.value}
            />
          }
        />
      </>
    );
  }
}
