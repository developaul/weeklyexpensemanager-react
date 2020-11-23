import React from 'react';
import PropTypes from 'prop-types';

const Gasto = ({ gasto:{ nombre, cantidad, id }, deleteGasto }) => (
    <li className="gastos">
        <p>
            { nombre }
            <span>
                <span className="gasto">${ cantidad }</span>
                <span
                className="eliminar" 
                onClick={ () => deleteGasto( id ) }
                >&chi;</span>
            </span>
        </p>
    </li>
);
 
Gasto.propTypes = {
    gasto: PropTypes.object.isRequired,
    deleteGasto: PropTypes.func.isRequired
}

export default Gasto;