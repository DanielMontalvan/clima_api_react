import React, { Component } from "react";

class Formulario extends Component {
  state = {};
  ciudadRef = React.createRef();
  paisRef = React.createRef();
  buscarClima = e => {
    //Leer los ref y crear el objeto
    e.preventDefault();
    const respuesta = {
      pais: this.paisRef.current.value,
      ciudad: this.ciudadRef.current.value
    };

    //enviar por this.props.
    this.props.datosConsulta(respuesta);
    //opcional resetear el formulario
  };

  render() {
    return (
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <form onSubmit={this.buscarClima}>
              <div className="input-field col s12 m8 l4 offset-m2">
                 <input id="ciudad" ref={this.ciudadRef} type="text" />
                <label htmlFor="ciudad ">Ciudad:</label>
              </div>
              <div className="input-field col s12 m8 l4 offset-m2">
                <select ref={this.paisRef}>
                  <option value="AR">Argentina</option>
                  <option value="CO">Colombia</option>
                  <option value="CR">Costa Rica</option>
                  <option value="ES">España</option>
                  <option value="US">USA</option>
                  <option value="MX">Mexico</option>
                  <option value="PE">Peru</option>
                </select>
                <label htmlFor="pais">País:</label>
              </div>
              <div className="input-field col s12 m8 l4 offset-m2 buscador ">
                <input
                  type="submit"
                  className="waves-effect waves-light btn-large yellow accent-4"
                  value="Buscar..."
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Formulario;
