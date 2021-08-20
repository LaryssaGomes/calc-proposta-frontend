import React from "react";
import Background from "../components/LoginRegister/Background";
import FormLogin from "../components/LoginRegister/FormLogin";

const Login = () => (
  <>
    <Background form={<FormLogin />} />
  </>
);

export default Login;
