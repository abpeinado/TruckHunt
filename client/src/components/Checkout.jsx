/* eslint-disable no-undef */ // ignore 'stripeCheckout is undefined'
import React from 'react';
import { connect } from 'react-redux';
import { submitOrder } from '../actions/checkoutActions.js';

let handler;

export class CheckoutComponent extends React.Component {
  constructor(props) {
    super(props);
    this.onCheckoutClicked = this.onCheckoutClicked.bind(this);
  }
  componentDidMount() {
    handler = StripeCheckout.configure({
      key: 'pk_test_gQjftMB43LFvjEbAptDzM9zr',
      name: 'Truck Hunt',
      image: 'http://www.iconsdb.com/icons/preview/red/truck-2-xxl.png',
      locale: 'auto',
      zipCode: false, // set to true for greater security
      billingAddress: false, // set to true to collect billing Address
      panelLabel: 'Place order of {{amount}}',
      // opened: () => console.log('opened checkout'),
      // closed: () => console.log('closed checkout')
      token: this.submitOrder.bind(this)
    });
  }
  componentWillUnmount() {
    handler.close(); // close modal upon leaving page
  }
  onCheckoutClicked(event) {
    handler.open({
      description: this.props.description, // should be a description of the product
      amount: this.props.amount
    });
    event.preventDefault();
  }
  submitOrder(token) {
    const orderInfo = {
      tokenID: token.id,
      email: token.email,
      vendorID: 1234, // will be pulled from state
      menuItems: this.props.truckList,
      total: 1999 // will be pulled from state
    };
    this.props.submitOrder(orderInfo);
  }

  errorMessage({ code }) { // can change to { code, message } to get more details
    let problem = 'order';
    if (code === 402) { // charge error
      problem = 'payment';
    } else if (code === 503) { // order error
      problem = 'order. Your card has not been charged';
    }
    return `We're  Sorry, but there was an error processing your 
      ${problem}. Please Try again in a moment. (Error Code: ${code})`;
  }

  render() {
    const { submittedOrder, submitOrderError, submitOrderProcessing } = this.props;
    if (submitOrderError) {
      return <div>{this.errorMessage(submitOrderError)}</div>;
    } else if (submitOrderProcessing) {
      return <div>You're order is processing </div>;
    } else if (submittedOrder) {
      return <div>Success! You're order has been placed.</div>;
    }
    return (
      <div>
        <button
          onClick={this.onCheckoutClicked}
        >
        Checkout
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.addedToCart,
  submitOrderError: state.submitOrderError,
  submitOrderProcessing: state.submitOrderProcessing,
  submittedOrder: state.submittedOrder
});

const mapDispatchToProps = (dispatch) => ({
  submitOrder: (orderInfo) => dispatch(submitOrder(orderInfo))
});

const Checkout = connect(mapStateToProps, mapDispatchToProps)(CheckoutComponent);

export default Checkout;
