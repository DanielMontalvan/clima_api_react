import React, { Component } from 'react';
//import '../Css/App.css';
import Header from '../Componentes/Header'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="App-header"
          titulo='Clima React'
        />
      </div>
    );
  }
}
export default App;

