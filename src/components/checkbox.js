import React from "react"
import PropTypes from "prop-types";
import Field from './field'

const Checkbox = (props) => (
    <Field label={props.label} control={
        <input className='checkbox' type='checkbox'
            name={props.inputName}
            onChange={props.handleChange} />
    } />
)

Checkbox.propTypes = {
    label: PropTypes.string.isRequired,
    inputName: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default Checkbox;