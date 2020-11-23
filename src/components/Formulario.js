import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Error } from './';
import { validateForm } from '../helpers';
import shortid from 'shortid';

const Formulario = ({ restante, guardarGasto, guardarCrearGasto }) => {

    // State nombre, State cantidad & State error
    const [ nombre, guardarNombre ]     = useState( '' ),
          [ cantidad, guardarCantidad ] = useState( 0 ),
          [ error, guardarError ]       = useState( false );

    const agregarGasto = event => {
        // Valida el formulario
        if( !validateForm( event, cantidad, guardarError, nombre, restante ) ) return;

        // Preparar el nuevo gasto en un objecto
        const gasto = { nombre, cantidad, id: shortid.generate() }

        // Agregar el nuevo gasto al array de Gastos
        guardarGasto( gasto );
        guardarCrearGasto( true );

        // Resetear Formulario
        guardarNombre( '' );
        guardarCantidad( 0 );
    }

    return (
        <form
            onSubmit={ agregarGasto }
        >
            <h2>Agrega tus gastos aquí</h2>
            
            { error ? <Error message='Ambos campos son obligatorios o Presupuesto Incorrecto' /> : null }

            <div className="campo">
                <label>Nombre Gasto:</label>
                <input
                    className="u-full-width"
                    type="text"
                    placeholder="Ej. Transporte"
                    value={ nombre }
                    onChange={ e => guardarNombre( e.target.value ) }
                />
            </div>

            <div className="campo">
                <label>Cantidad Gasto:</label>
                <input
                    className="u-full-width"
                    type="number"
                    placeholder="Ej. 300"
                    value={ cantidad || '' }
                    onChange={ e => guardarCantidad( parseInt( e.target.value ) ) }
                />
            </div>

            <input
                className="u-full-width button-primary"
                type="submit"
                value="Agregar Gasto"
            />
        </form>
    );
}

Formulario.propTypes = {
    restante: PropTypes.number.isRequired,
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}

export default Formulario;