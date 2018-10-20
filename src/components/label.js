import React from "react"
import PropTypes from "prop-types";

const Label = (props) => (
    <div className="field-label is-normal">
        <label className="label">{props.label}</label>
    </div>
)

Label.propTypes = {
    label: PropTypes.string.isRequired
};

export default Label;