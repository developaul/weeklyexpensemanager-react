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

export {
    validateForm
}