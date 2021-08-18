import React from "react";
import NavBar from "../components/Logado/NavBar/index.js";
import FormRegisterProposal from "../components/Logado/FormRegisterProposal/index.js";
const RegisterProposal = () => (
  <>
    <NavBar itemReight={<FormRegisterProposal />} />
  </>
);

export default RegisterProposal;
