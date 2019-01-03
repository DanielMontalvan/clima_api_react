import React, { Component } from 'react';

class Clima extends Component {
    mostrarResultado = () => {
        const { name, wheather, main } = this.props.resultado;
        const kelvin = 273.15
        if (!name || !main) return null;
        console.log("Que")
        return (
            <div className="row">
                <div className="col s12 m6 offset-m3">
                    <div className='card-panel light-blue align-center'>
                        <span className=''>
                            <h2>Resultado clima de:{name}</h2>
                            <p className='temperatura'>Temperatura Actual:{(main.temp - kelvin).toFixed(2)} &deg;C</p>
                        </span>
                    </div>

                </div>
            </div>
        )
    }
    render() {
        return (
            <div className='container'>{this.mostrarResultado()}</div>
        );
    }
}

export default Clima;