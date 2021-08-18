import React from "react";
import Background from "../components/LoginRegister/Background/index.js";
import FormLogin from "../components/LoginRegister/FormLogin/index.js";
const Login = () => (
  <>
    <Background form={<FormLogin />} />
  </>
);

export default Login;
