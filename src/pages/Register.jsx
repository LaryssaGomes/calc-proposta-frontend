import React from "react";
import Background from "../components/LoginRegister/Background";
import FormRegister from "../components/LoginRegister/FormRegister";
export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      err: false,
      success: false,
    };
  }
  render() {
    return (
      <>
        <Background
          form={<FormRegister />}
          err={this.state.err}
          success={this.state.success}
        />
      </>
    );
  }
}
