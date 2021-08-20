import React from "react";
import "./styles.scss";

export default class FormLogin extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div id="form-login">
        <form autocomplete="off">
          <div className="title">
            <p>Login</p>
          </div>
          <div>
            <div>
              <input
                type="text"
                placeholder="Email"
                name="email"
                onChange={this.onChange}
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Senha"
                name="password"
                onChange={this.onChange}
                required
              />
            </div>
          </div>
          <div class="button-form">
            <div>
              <button id="login" type="submit">
                Entrar
              </button>
            </div>
            <div className="button-register">
              <a href="/register"> Cadastro</a>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
