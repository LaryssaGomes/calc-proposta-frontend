import React from "react";
import "./styles.scss";
import { AiFillEye } from "react-icons/ai";

export default class FormLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.eye = this.eye.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.stopPropagation();
    e.preventDefault();
    this.props.loginAccount({
      email: this.state.email,
      password: this.state.password,
    });
  }

  eye() {
    if (this.state.show === false) {
      this.setState({ show: true });
    } else {
      this.setState({ show: false });
    }
  }

  render() {
    return (
      <div id="form-login">
        <form onSubmit={this.handleSubmit} autocomplete="off">
          <div className="title">
            <p>Login</p>
          </div>
          <div>
            <div>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={this.onChange}
                required
              />
            </div>
            <div className="password">
              <div>
                <input
                  type={this.state.show ? "text" : "password"}
                  placeholder="Senha"
                  name="password"
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="eye" onClick={this.eye}>
                <AiFillEye />
              </div>
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
