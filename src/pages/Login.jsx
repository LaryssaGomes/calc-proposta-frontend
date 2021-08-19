import React from "react";
import Background from "../components/LoginRegister/Background/index.jsx";
import FormLogin from "../components/LoginRegister/FormLogin/index.jsx";

const Login = () => (
  <>
    <Background form={<FormLogin />} />
  </>
);

export default Login;
