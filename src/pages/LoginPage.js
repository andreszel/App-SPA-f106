import React, { Component } from "react";

export class LoginPage extends Component {
  handleClick = () => alert("Formularz w budowie!");

  render() {
    return (
      <div>
        <label htmlFor="">
          Podaj login: <input type="text" />
        </label>
        <label htmlFor="">
          Podaj hasło: <input type="password" />
        </label>
        <button onClick={this.handleClick}>Zaloguj</button>
      </div>
    );
  }
}
