/* eslint-disable no-undef */

import React from 'react';
import { Loader, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { submitOrder, clearCart, clearCartTotal, clearSubmitOrderSuccess } from '../actions/checkoutActions.js';

let handler;

export class CheckoutComponent extends React.Component {
  constructor(props) {
    super(props);
    this.onCheckoutClicked = this.onCheckoutClicked.bind(this);
  }
  componentDidMount() {
    const amount = this.props.cartTotal; // eslint-disable-line no-unused-vars
    handler = StripeCheckout.configure({
      key: process.env.STRIPE_PUBLIC_KEY,
      name: 'Truck Hunt',
      image: 'http://www.iconsdb.com/icons/preview/red/truck-2-xxl.png',
      locale: 'auto',
      zipCode: false, // set to true for greater security
      billingAddress: false, // set to true to collect billing Address
      panelLabel: 'Place order of {{amount}}',
      token: this.submitOrder.bind(this)
    });
  }
  componentWillUnmount() {
    this.props.clearCart();
    this.props.clearCartTotal();
    this.props.clearSubmitOrderSuccess();
    handler.close(); // close modal upon leaving page
  }
  onCheckoutClicked(event) {
    handler.open({
      description: this.props.description, // should be a description of the product
      amount: this.props.cartTotal
    });
    event.preventDefault();
  }
  submitOrder(token) {
    const orderInfo = {
      tokenID: token.id,
      customer_email: token.email,
      vendor_id: this.props.vendor_id, // will be pulled from state
      customer_id: null, // checkout as guest
      menuItems: this.props.cartItems,
      total: this.props.cartTotal, // will be pulled from state
      order_note: '' // can add a note for entire order
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
    const { cartItems, submittedOrder, submitOrderError, submitOrderProcessing } = this.props;
    if (submitOrderError) {
      return <div>{this.errorMessage(submitOrderError)}</div>;
    } else if (submitOrderProcessing) {
      return (
        <div>
          <h2 className="textCenter" >You're order is processing</h2>
          <Loader active inline="centered" />
        </div>
      );
    } else if (submittedOrder) {
      return (
        <div>
          <Redirect
            to={{
              pathname: '/orderSuccess'
            }}
          />
        </div>
      );
    }
    return (
      <Button fluid basic color="green" disabled={!cartItems.length} onClick={this.onCheckoutClicked}>
      Checkout
      </Button>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.addedToCart,
  submitOrderError: state.submitOrderError,
  submitOrderProcessing: state.submitOrderProcessing,
  submittedOrder: state.submittedOrder,
  cartTotal: state.cartTotal,
  vendor_id: state.truckSelected.vendor_id
});

const mapDispatchToProps = (dispatch) => ({
  submitOrder: (orderInfo) => dispatch(submitOrder(orderInfo)),
  clearCart: () => dispatch(clearCart()),
  clearCartTotal: () => dispatch(clearCartTotal()),
  clearSubmitOrderSuccess: () => dispatch(clearSubmitOrderSuccess())
});

const Checkout = connect(mapStateToProps, mapDispatchToProps)(CheckoutComponent);

export default Checkout;
