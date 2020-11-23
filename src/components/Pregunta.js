import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Error } from './';

const Pregunta = ({ guardarPresupuesto, guardarRestante, actualizarPregunta }) => {
    
    // State cantidad & State error
    const [ cantidad, guardarCantidad ] = useState( 0 ),
          [ error, guardarError ]       = useState( false );


    // Valida el Formulario
    const validateForm = event => {
        event.preventDefault();
        
        if( cantidad < 1 || isNaN( cantidad ) ) {
            guardarError( true );
            return;
        }

        guardarError( false );

        // Establece la cantidad como presupuesto
        guardarPresupuesto( cantidad );
        guardarRestante( cantidad );
        actualizarPregunta( false );
    }

    return ( 
        <>
            <h2>Coloca tu presupuesto</h2>
            
            { error ? <Error message='El presupuesto es incorrecto' /> : null }

            <form
                onSubmit={ validateForm }
            >
                <input
                    className="u-full-width"
                    type="number"
                    placeholder="Coloca tu presupuesto"
                    onChange={ e => guardarCantidad( parseInt( e.target.value ) ) }
                />

                <input
                    className="u-full-width button-primary"
                    type="submit"
                    value="Definir Presupuesto"
                />
            </form>
        </>
    );
}

Pregunta.propTypes = {
    guardarPresupuesto  : PropTypes.func.isRequired,
    guardarRestante     : PropTypes.func.isRequired,
    actualizarPregunta  : PropTypes.func.isRequired
}

export default Pregunta;