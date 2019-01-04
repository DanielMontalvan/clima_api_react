import React, { Component } from 'react';
import PropTypes from 'prop-types'
class Clima extends Component {
    mostrarResultado = () => {
        const { name, weather, main } = this.props.resultado;
        const kelvin = 273.15

        if (!name || !main) return null;
        const icon = `http://openweathermap.org/img/w/${weather[0].icon}.png`
        return (
            <div className="row">
                <div className="col s12 m6 offset-m3">
                    <div className='card-panel light-blue align-center'>
                        <span className=''>
                            <h3>Resultado clima de:{name}</h3>
                            <p className=''>Temperatura Actual:{(main.temp - kelvin).toFixed(2)} &deg;C</p>
                            <img src={icon} alt="`Clima de ${name}`" />
                            <p className=''>Max:{(main.temp_max - kelvin).toFixed(2)} &deg;C</p>
                            <p className=''>Min:{(main.temp_min - kelvin).toFixed(2)} &deg;C</p>
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
Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}
export default Clima;