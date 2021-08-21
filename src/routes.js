import React from "react";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import HomeLogado from "./pages/home-logado";
import RegisterProposal from "./pages/register-proposal";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./api/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <Home />} />
      <Route path="/login" component={() => <Login />} />
      <Route path="/register" component={() => <Register />} />
      <PrivateRoute path="/homelogado" component={() => <HomeLogado />} />
      <PrivateRoute
        path="/registerproposal"
        component={() => <RegisterProposal />}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;
