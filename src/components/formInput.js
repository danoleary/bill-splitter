import React from "react"
import PropTypes from "prop-types";

const FormInput = (props) => (
    <div className="field is-horizontal">
        <div className="field-label is-normal">
            <label className="label">{props.label}</label>
        </div>
        <div className="field-body">
            <div className="field">
                <div className="control">
                    <input className={props.type === 'checkbox' ? 'checkbox' : 'input'} type={props.type}
                    name={props.inputName}
                    onInput={props.handleChange}
                    defaultValue={props.type === 'checkbox' ? props.initialValue : false} />
                </div>
            </div>
        </div>
    </div>
)

FormInput.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    inputName: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    initialValue: PropTypes.number.isRequired
};

export default FormInput;