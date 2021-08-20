import React from "react";
import "./styles.scss";

export default class FormRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      err: "",
    };
  }
  render() {
    return (
      <div id="form-login">
        <form method="post" autocomplete="off">
          <div className="title">
            <p>Cadastro</p>
          </div>
          <div>
            <div>
              <input type="text" placeholder="Email" />
            </div>
            <div>
              <input type="password" placeholder="Senha" />
            </div>
          </div>
          <div class="button-form">
            <div>
              <button type="submit">Cadastrar</button>
            </div>
            <div className="button-login">
              <a href="/login"> Login</a>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
