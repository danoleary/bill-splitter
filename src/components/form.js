import React from "react"
import PropTypes from "prop-types";
import NumberInput from './numberInput'

const Form = ( props ) => (
    <form className="is-narrow">
        <NumberInput
            label="Total bill"
            inputName="totalCost"
            initialValue={0}
            handleChange={props.handleInputChange} />
        <NumberInput
            label="Number of people"
            inputName="numPeople"
            initialValue={2}
            handleChange={props.handleInputChange} />
        <NumberInput
            label="Tip"
            inputName="tip"
            initialValue={0}
            handleChange={props.handleInputChange} />
        <button onClick={props.toggleIncludeAlcohol} className="button" type="button" >
            Include alcohol?
        </button>
        {props.includeAlcohol && 
            <div>
                <NumberInput
                    label="Alcohol total cost"
                    inputName="alcoholTotalCost"
                    initialValue={0}
                    handleChange={props.handleInputChange} />
                <NumberInput
                    label="Number drinking alcohol"
                    inputName="numDrinkingAlcohol"
                    initialValue={0}
                    handleChange={props.handleInputChange} />
            </div>
        }  
    </form>
)

Form.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    includeAlcohol: PropTypes.bool.isRequired
};

export default Form;