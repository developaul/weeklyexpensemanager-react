import React, { useState } from 'react';
import { Pregunta, Formulario } from './components';

function App() {

	const [ presupuesto, guardarPresupuesto ] 	= useState( 0 ),
		  [ restante, guardarRestante ] 		= useState( 0 ),
		  [ pregunta, actualizarPregunta ] 		= useState( true ),
		  [ gastos, guardarGastos ] 			= useState( [] ),
		  [ gasto, guardarGasto ]				= useState( {} ),
		  [ creargasto, guardarCrearGasto ]		= useState( false );

	return (
		<div className="container">
			<header>
				<h1>Gasto Semanal</h1>

				<div className="contenido-principal contenido">
					{ pregunta ?
						( 
							<Pregunta
								guardarPresupuesto={ guardarPresupuesto }
								guardarRestante={ guardarRestante }
								actualizarPregunta={ actualizarPregunta }
							/>
						)
						:
						(
							<div className="row">
								<div className="one-half column">
									<Formulario
										restante={ restante }
										guardarGasto={ guardarGasto }
										guardarCrearGasto={ guardarCrearGasto }
									/>
								</div>

								<div className="one-half column">

								</div>
							</div>
						)
					}
				</div>
			</header>
		</div>
	);
}

export default App;
