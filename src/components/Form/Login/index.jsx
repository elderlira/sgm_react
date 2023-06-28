import React from "react";
import Botao from "../../Button/button";

class Formulario extends React.Component {
  render() {
    return (
      <form>
        <div>
          <label htmlFor="email">E-mail: </label>
          <input type="text" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="senha">Senha: </label>
          <input type="text" name="password" id="password" required />
        </div>
        <Botao />
      </form>
    );
  }
}

export default Formulario;
