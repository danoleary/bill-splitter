import React from "react"
import PropTypes from "prop-types";
import Label from './label'

const Field = (props) => (
    <div className="field is-horizontal">
        <Label label={props.label} />
        <div className="field-body">
            <div className="field">
                <div className="control">
                    {props.control}
                </div>
            </div>
        </div>
    </div>
)

Field.propTypes = {
    label: PropTypes.string.isRequired,
    control: PropTypes.element,
};

export default Field;