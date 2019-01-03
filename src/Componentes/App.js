import React, { Component } from "react";
//import '../Css/App.css';
import Formulario from "./Formulario";
import Header from "./Header";
import Error from "./Error";

class App extends Component {
  state = {
    error: "",
    consulta: "",
    retultado: ""
  };

  componentDidUpdate() {
    this.consultarApi();
  }

  componentDidMount() {
    this.setState({ error: false });
  }
  datosConsulta = respuesta => {
    if (respuesta.ciudad === "" || respuesta.pais === "") {
      this.setState({ error: true, consulta: "" });
    } else {
      this.setState({ error: false, consulta: respuesta });
    }
  };
  consultarApi = () => {
    const { ciudad, pais } = this.state.consulta;
    if (ciudad !== undefined || pais !== undefined) {
      console.log(ciudad);
      const appId = "0404e413d6c971d74f7a58d6f3a0b6cc";
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
      console.log(url);
      fetch(url)
        .then(respuesta => {
          return respuesta.json();
        })
        .then(datos => {
          this.setState({ resultado: datos });
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  render() {
    const error = this.state.error;
    let resultado;
    if (error) {
      resultado = <Error mensaje="Ambos campos son obligatorios" />;
    }
    return (
      <div className="App">
        <Header className="App-header" titulo="Clima React" />
        <Formulario datosConsulta={this.datosConsulta} />
        {resultado}
      </div>
    );
  }
}
export default App;
