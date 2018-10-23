import React from "react"
import PropTypes from "prop-types";
import Field from './field'

const NumberInput = (props) => (
    <Field label={props.label} control={
        <input className='input' type='number' inputMode="numeric"
            name={props.inputName}
            onInput={props.handleChange} />
    } />
)

NumberInput.propTypes = {
    label: PropTypes.string.isRequired,
    inputName: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    initialValue: PropTypes.number.isRequired
};

export default NumberInput;