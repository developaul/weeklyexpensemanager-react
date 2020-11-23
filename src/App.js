import React, { useState, useEffect } from 'react';
import { Pregunta, Formulario, Listado } from './components';

function App() {

	// States
	const [ presupuesto, guardarPresupuesto ] 	= useState( 0 ),
		  [ restante, guardarRestante ] 		= useState( 0 ),
		  [ pregunta, actualizarPregunta ] 		= useState( true ),
		  [ gastos, guardarGastos ] 			= useState( [] ),
		  [ gasto, guardarGasto ]				= useState( {} ),
		  [ creargasto, guardarCrearGasto ]		= useState( false );

	// Effects
	useEffect( () => {
		if( creargasto ) {
			// Agrega un nuevo Gasto
			guardarGastos([ ...gastos, gasto ]);

			// Resta del presupuesto actual
			guardarRestante( restante - gasto.cantidad );

			// Resetear a false
			guardarCrearGasto( false );
		}
	}, [ gasto, gastos, creargasto, restante ] );
	
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
									<Listado
										gastos={ gastos }
										restante={ restante }
										guardarGastos={ guardarGastos }
										guardarRestante={ guardarRestante }
									/>
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
