import React from "react"
import PropTypes from "prop-types";
import FormInput from './formInput'

const Form = ( props ) => (
    <form className="is-narrow">
        <FormInput
            label="Total bill"
            inputName="totalCost"
            initialValue={0}
            handleChange={props.handleInputChange}
            type="number" />
        <FormInput
            label="Number of people"
            inputName="numPeople"
            initialValue={2}
            handleChange={props.handleInputChange}
            type="number" />
        <FormInput
            label="Tip"
            inputName="tip"
            initialValue={0}
            handleChange={props.handleInputChange}
            type="number" />
        <FormInput
            label="Include alcohol?"
            inputName="includeAlcohol"
            initialValue={0}
            handleChange={props.handleInputChange}
            type="checkbox" />
        {!!props.includeAlcohol && 
            <div>
                <FormInput
                    label="Alcohol total cost"
                    inputName="alcoholTotalCost"
                    initialValue={0}
                    handleChange={props.handleInputChange}
                    type="number" />
                <FormInput
                    label="Number drinking alcohol"
                    inputName="numDrinkingAlcohol"
                    initialValue={0}
                    handleChange={props.handleInputChange}
                    type="number" />
            </div>
        }  
    </form>
)

Form.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    includeAlcohol: PropTypes.bool.isRequired
};

export default Form;