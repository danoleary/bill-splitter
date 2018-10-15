import React from "react"
import PropTypes from "prop-types";

const ResultBox = (props) => 
    (
        <div className="tile is-ancestor has-text-centered">
            <div className="tile is-parent">
                <article className="tile is-child box">
                    <p className="title">£{props.amount}</p>
                    <p className="subtitle">{props.label}</p>
                </article>
            </div>
        </div>
    )

ResultBox.propTypes = {
    amount: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};

export default ResultBox;
