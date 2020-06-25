import React from 'react';
import { kelvinToCelsius } from 'temperature-util'
import PropTypes from 'prop-types'

const Clima = ({ resultado }) => {
    const { name, main } = resultado;

    if (!name) return null;

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es:</h2>
                <p className="temperatura">
                    {parseFloat(kelvinToCelsius(main.temp), 10).toFixed(2)}<span> &#x2103;</span>
                </p>
                <p>Temperatura Maxima:
                    {parseFloat(kelvinToCelsius(main.temp_max), 10).toFixed(2)}<span> &#x2103;</span>
                </p>
                <p>Temperatura Minima:
                    {parseFloat(kelvinToCelsius(main.temp_min), 10).toFixed(2)}<span> &#x2103;</span>
                </p>
            </div>
            aI0wO4cQ5
        </div>

    );
}

export default Clima;

Clima.propType = {
    resultado: PropTypes.object.isRequired
}