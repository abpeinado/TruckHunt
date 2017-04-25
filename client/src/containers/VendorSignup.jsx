// Signup page for truck owners
import React from 'react';
// import { signup } from ''
import { FormControl, Button, FormGroup, Form, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signupFetch } from '../actions/signupActions.js';

class VendorSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
      password: '',
      verify: '',
      firstName: '',
      lastName: '',
      email: '',
      permit: ''
    };
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleVerifyChange = this.handleVerifyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handlePermitChange = this.handlePermitChange.bind(this);
  }

  handlePermitChange(event) {
    this.setState({
      permit: event.target.value
    });
  }

  handlePhoneNumberChange(event) {
    this.setState({
      phoneNumber: event.target.value
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleVerifyChange(event) {
    this.setState({
      verify: event.target.value
    });
  }

  handleFirstNameChange(event) {
    this.setState({
      firstName: event.target.value
    });
  }

  handleLastNameChange(event) {
    this.setState({
      lastName: event.target.value
    });
  }

  handleSubmit(event) {
    // prevent form from triggering page refresh
    event.preventDefault();
    event.stopPropagation();

    const phone = this.state.phoneNumber;
    const pass = this.state.password;
    const permit = this.state.permit;
    const verify = this.state.verify;
    const email = this.state.email;
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;

    // Prepare obj to send to server
    const userInfo = {
      phone,
      pass,
      permit,
      email,
      firstName,
      lastName,
      url: '/vendorSignup'
    };

    // TODO: add logic for password integrity
    if (pass === verify) {
      // pass signup function from redux store the userInfo obj
      this.props.signupFetch(userInfo, () => {});
      // restore state to initial condition
      this.setState({
        phoneNumber: '',
        password: '',
        verify: '',
        firstName: '',
        lastName: '',
        email: '',
        permit: ''
      });
    }
  }
        // // Redirect to vendor portal if successful
        // {<Redirect
        //   to={{
        //     pathname: '/vendor'
        //   }}
        // />}

  // Render to the DOM
  render() {
    if (this.props.signupSuccess) {
      return (
        <div>
          <h2> time to sign up buddy! </h2>
          <form action={`/stripe?user=${this.props.setUserID}`} method="post">
            <input type="submit" value="signup with stripe" />
          </form>
        </div>
      );
    }
    return (
      <Form horizontal onSubmit={this.handleSubmit} className="loginForm" >
        <FormGroup>
          <Col sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl type="email" placeholder="eats@fuegotrucks.com" value={this.state.email} onChange={this.handleEmailChange} />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col sm={2}>
           Phone Number
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="(415) 555-5555" value={this.state.phoneNumber} onChange={this.handlePhoneNumberChange} />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="Top Secret" value={this.state.password} onChange={this.handlePasswordChange} />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col sm={2}>
            Verify Password
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="Top Secret" value={this.state.verify} onChange={this.handleVerifyChange} />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col sm={2}>
            First Name
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="John" value={this.state.firstName} onChange={this.handleFirstNameChange} />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col sm={2}>
            Last Name
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="Yossarian" value={this.state.lastName} onChange={this.handleLastNameChange} />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col sm={2}>
            Permit Number
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="XXXXX-XXXX" value={this.state.permit} onChange={this.handlePermitChange} />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col sm={12}>
            <Button type="submit" bsStyle="success" block>
              Submit
            </Button>
          </Col>
        </FormGroup>
        {this.props.signupError &&
          <h4> Some of your information is invalid, please double check your inputs </h4>}
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    signupError: state.vendorSignupError,
    signupSuccess: state.signupSuccess,
    signupLoading: state.signupLoading,
    venderLoginSuccess: state.venderLoginSuccess,
    setUserID: state.setUserID,
    setUsername: state.setUsername
  };
};

const mapDispatchToProps = (dispatch) => ({
  signupFetch: (info) => dispatch(signupFetch(info))
});

export default connect(mapStateToProps, mapDispatchToProps)(VendorSignup);
