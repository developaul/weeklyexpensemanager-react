import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Error } from './';
import { validateForm } from '../helpers';

const Pregunta = ({ guardarPresupuesto, guardarRestante, actualizarPregunta }) => {
    
    // State cantidad & State error
    const [ cantidad, guardarCantidad ] = useState( 0 ),
          [ error, guardarError ]       = useState( false );

    // Agrega la cantidad como presupuesto
    const agregarCantidad = event => {
        // Valida el Formulario
        if( !validateForm( event, cantidad, guardarError ) ) return;

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
                onSubmit={ agregarCantidad }
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