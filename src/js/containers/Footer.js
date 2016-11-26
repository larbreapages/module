import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { nextStep, previousStep } from '../actions/index';
import StripeCheckout from './StripeCheckout';

class Footer extends Component {
    render() {
        const previousButton = <button onClick={() => this.props.previousStep()}>Previous</button>;

        let nextButton;
        if (this.props.currentStep < this.props.steps.length) {
            nextButton = <button onClick={() => this.props.nextStep()}>Next</button>;
        }

        let purchaseButton;
        if (this.props.currentStep === this.props.steps.length) {
            purchaseButton = <StripeCheckout />;
        }

        return (
            <div className="footer">
                { previousButton }
                <div className="price">Total: 100$</div>
                { nextButton }
                { purchaseButton }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        steps: state.steps.steps,
        currentStep: state.steps.currentStep,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ nextStep, previousStep }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Footer);
