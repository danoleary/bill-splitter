import React from "react";
import PropTypes from "prop-types";

const NumberInput = (props) => (
    <Field label={props.label} control={
        <input className='input' type='number'
            name={props.inputName}
            onInput={props.handleChange}
            defaultValue={props.initialValue} />
    } />
)

NumberInput.propTypes = {
    label: PropTypes.string.isRequired,
    inputName: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    initialValue: PropTypes.number.isRequired
};

export default NumberInput;