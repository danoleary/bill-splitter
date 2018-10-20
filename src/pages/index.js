import React from "react"
import 'bulma/css/bulma.css'
import Form from "../components/form";
import ResultBox from "../components/resultBox";
import { Helmet } from "react-helmet";

export default class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numPeople: 2, totalCost: 0, tip: 0, alcoholTotalCost: 0,
            numDrinkingAlcohol: 0, includeAlcohol: false
        };

        this.calculateSplits = this.calculateSplits.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.parseValue = this.parseValue.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const type = target.type;
        const value = type === 'checkbox' ? target.checked : target.value;
        if (type !== 'checkbox' && !value) {
            return;
        }
        if(name === 'includeAlcohol') {
            this.setState({
                includeAlcohol: !this.state.includeAlcohol
            });
        }
        const parsedValue = this.parseValue(name, value);
        this.setState({
            [name]: parsedValue
        });
    }

    parseValue(name, value) {
        switch (name) {
            case 'totalCost':
            case 'tip':
            case 'alcoholTotalCost': {
                return parseFloat(value);
            }
            case 'numPeople':
            case 'numDrinkingAlcohol': {
                return parseInt(value);
            }
            default: {
                return !!value;
            }
        }
    }

    calculateSplits(totalCost, tip, numPeople, alcoholTotalCost, numDrinkingAlcohol) {
        const evenSplit = ((totalCost + tip) / numPeople).toFixed(2);
        if (totalCost === 0 || numDrinkingAlcohol === 0) {
            return {
                evenSplit: evenSplit,
                withAlcohol: evenSplit,
                withoutAlcohol: evenSplit
            }
        }
        const alcoholPerPerson = (alcoholTotalCost / numDrinkingAlcohol);
        const splitWithoutAlcohol = ((totalCost + tip - alcoholTotalCost) / numPeople);
        const splitWithAlcohol = parseFloat(splitWithoutAlcohol) + parseFloat(alcoholPerPerson);
        return {
            evenSplit: evenSplit,
            withAlcohol: splitWithAlcohol.toFixed(2),
            withoutAlcohol: splitWithoutAlcohol.toFixed(2)
        }
    }

    render() {
        const splits = this.calculateSplits(
            this.state.totalCost,
            this.state.tip,
            this.state.numPeople,
            this.state.alcoholTotalCost,
            this.state.numDrinkingAlcohol
        )
        return (
            <section className="section">
                <Helmet>
                    <meta charSet="utf-8" />
                    <meta name="Description" content="bill splitter"></meta>
                    <title>Bill splitter</title>
                     />
                </Helmet>
                <div className="container">
                    <div className="columns">
                        <div className="column"></div>
                        <div className="column is-half">
                            <Form
                                includeAlcohol={this.state.includeAlcohol}
                                handleInputChange={this.handleInputChange}
                            />
                            <br />
                            {!this.state.includeAlcohol &&
                                <ResultBox label="each" amount={splits.evenSplit} />
                            }
                            {this.state.includeAlcohol &&
                                <div>
                                    <ResultBox label="with alcohol" amount={splits.withAlcohol} />
                                    <ResultBox label="without alcohol" amount={splits.withoutAlcohol} />
                                </div>
                            }
                        </div>
                        <div className="column"></div>
                    </div>
                </div>
            </section>
        )
    }
}
