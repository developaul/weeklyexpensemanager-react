import React from 'react';
import PropTypes from 'prop-types';
import { Gasto } from './';

const Listado = ({ gastos, guardarGastos, restante, guardarRestante }) => {

    // Borra un gasto mediante su id y devuelve su dinero
    const deleteGasto = id => {
        const nuevosGastos = gastos.filter( gasto => {
            if( gasto.id !== id ) {
                return gasto;
            }

            guardarRestante( restante + gasto.cantidad );
        });

        guardarGastos( nuevosGastos );
    }

    return ( 
        <div className="gastos-realizados">
            <h1>Listado</h1>

            {
                gastos.map( gasto => (
                    <Gasto 
                        key={ gasto.id }
                        gasto={ gasto }
                        deleteGasto={ deleteGasto }
                    />
                ))
            }
        </div>
    );
}

Listado.propTypes = {
    gastos: PropTypes.array.isRequired,
    restante: PropTypes.number.isRequired,
    guardarGastos: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired
}

export default Listado;