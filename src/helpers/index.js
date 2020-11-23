// Valida los formularios
const validateForm = ( event, cantidad, guardarError, nombre='default', restante ) => {
    event.preventDefault();
    
    if( cantidad < 1 || isNaN( cantidad ) || nombre === '' || cantidad > restante ) {
        guardarError( true );
        return false;
    }

    guardarError( false );
    return true;
}

// Revisa el restante siempre
const revisarPresupuesto = ( presupuesto, restante ) => {
    let clase;

    if( ( presupuesto / 4 ) > restante ) {
        clase = 'alert alert-danger';
    } else if( ( presupuesto / 2 ) > restante ) {
        clase = 'alert alert-warning';
    } else {
        clase = 'alert alert-success';
    }

    return clase;
}

export {
    validateForm,
    revisarPresupuesto
}