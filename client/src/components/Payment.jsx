/* eslint-disable react/prefer-es6-class, no-undef */

import React from 'react';
import reactScriptLoader from 'react-script-loader';
import { connect } from 'react-redux';
import { submitOrder } from '../actions/paymentActions.js';

const RSLMixin = reactScriptLoader.ReactScriptLoaderMixin;

const PaymentComponent = React.createClass({
  mixins: [RSLMixin],

  getInitialState: function getInitialState() {
    return {
      stripeLoading: true,
      stripeLoadingError: false,
      submitDisabled: false,
      paymentError: null,
      paymentComplete: false,
      token: null
    };
  },

  onScriptLoaded: function onScriptLoaded() {
    if (!PaymentComponent.getStripeToken) {
      Stripe.setPublishableKey('pk_test_gQjftMB43LFvjEbAptDzM9zr');

      this.setState({ stripeLoading: false, stripeLoadingError: false });
    }
  },

  onScriptError: function onScriptError() {
    this.setState({ stripeLoading: false, stripeLoadingError: true });
  },

  onSubmit: function onSubmit(event) {
    const self = this;
    event.preventDefault();
    this.setState({ submitDisabled: true, paymentError: null });

    Stripe.createToken(event.target, (status, response) => {
      if (response.error) {
        self.setState({ paymentError: response.error.message, submitDisabled: false });
      } else {
        // make server request
        self.setState({ paymentComplete: true, submitDisabled: false, token: response.id });
        this.props.submitOrder(response.id);
        // console.log('token: ', response.id);
      }
    });
  },

  getScriptURL: function getScriptURL() {
    return 'https://js.stripe.com/v2/';
  },

  render: function render() {
    if (this.state.stripeLoading) {
      return <div>Loading</div>;
    } else if (this.state.stripeLoadingError) {
      return <div>Error</div>;
    } else if (this.state.paymentComplete) {
      return <div>Payment Complete!</div>;
    }
    return (<form onSubmit={this.onSubmit} >
      <span>{ this.state.paymentError }</span><br />
      <input type="text" data-stripe="number" placeholder="credit card number" value="4242424242424242" /><br />
      <input type="text" data-stripe="exp-month" placeholder="expiration month" value="9" /><br />
      <input type="text" data-stripe="exp-year" placeholder="expiration year" value="2019" /><br />
      <input type="text" data-stripe="cvc" placeholder="cvc" value="123" /><br />
      <input disabled={this.state.submitDisabled} type="submit"value="Purchase" />
    </form>);
  }
});

const mapDispatchToProps = (dispatch) => {
  return {
    submitOrder: (orderInfo) => dispatch(submitOrder(orderInfo))
  };
};

const Payment = connect(null, mapDispatchToProps)(PaymentComponent);

export default Payment;
// module.exports = PaymentComponent;
