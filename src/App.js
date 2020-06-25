import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';

function App() {
	const [busqueda, setBusqueda] = useState({
		ciudad: '',
		pais: ''
	});
	const [error, setError] = useState(false);

	const [consulta, setConsulta] = useState(false);

	const [resultado, setResultado] = useState({});

	useEffect(() => {
		const consultarAPI = async () => {
			if (consulta) {

				const appId = '9fbf380589629e4daffecaa779585387'
				const url = `https://api.openweathermap.org/data/2.5/weather?q=${busqueda.ciudad},${busqueda.pais}&appid=${appId}`

				const respuesta = await fetch(url);
				const resultado = await respuesta.json();

				setResultado(resultado);
				setConsulta(false);

				if (resultado.cod === '404') {
					setError(true);
				} else {
					setError(false);
				}
			}
		}

		consultarAPI();
		// eslint-disable-next-line
	}, [consulta]);


	let componente;
	if (error) {
		componente = <Error mensaje="No Hay resultados" />
	} else {
		componente = <Clima resultado={resultado} />
	}



	return (
		<>
			<Header
				titulo='Clima React app'
			/>

			<div className="contenedor-form">
				<div className="container">
					<div className="row">
						<div className="col m6 s12">
							<Formulario
								busqueda={busqueda}
								setBusqueda={setBusqueda}
								setConsulta={setConsulta}
							/>
						</div>
						<div className="col m6 s12">
							{componente}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
