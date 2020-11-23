import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ message }) => ( 
    <p className="alert alert-danger error">{ message }</p>
);
 
export default Error;

Error.propTypes = {
    message: PropTypes.string.isRequired
}