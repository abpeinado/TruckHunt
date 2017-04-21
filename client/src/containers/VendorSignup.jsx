// Signup page for truck owners
import React from 'react';
// import { signup } from ''
import { FieldGroup, FormControl, Button, FormGroup, Form, Col, Checkbox } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { signupFetch } from '../actions/signupActions.js';

class OwnerSignup extends React.Component {
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
    this.handlePhotoUpload = this.handlePhotoUpload.bind(this);
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

  handlePhotoUpload(event) {
    console.log('inside photo upload handler', event);
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
    event.preventDefault();
    // event.stopPropagation();

    const phone = this.state.phoneNumber;
    const pass = this.state.password;
    const permit = this.state.permit;
    const verify = this.state.verify;
    const email = this.state.email;
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;

    const userInfo = {
      phone,
      pass,
      permit,
      email,
      firstName,
      lastName,
      url: '/vendorSignup'
    };
    // check db to see if phoneNumber is available
    // constant ajax call saved inside redux store
    // if available check passwords match
    // TODO: add logic for password integrity
    if (pass === verify) {
      console.log('inside handleSubmit, passwords match');
      // dispatch fetch function saved in redux
      this.props.signupFetch(userInfo, () => {
        console.log('signupFetch Async');
      });

      this.setState({
        phoneNumber: '',
        password: '',
        verify: '',

      });
    } else {
      // TODO: conditional render passwords don't match
      // ALSO: error handling for incorrect login
      console.log('inside handleSubmit, passwords do not match');
    }
  }

  render() {
    if (this.props.signupError) {
      return (
        <h1>ERROR</h1>
      );
    }
    if (this.props.signupLoading) {
      return (
        <h1>Loading...</h1>
      );
    }

    // IMPORTANT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // TODO: ADD REDIRECT TO TRUCK MANAGEMENT VIEW
    console.log('SIGNUP ', this.props.signupSuccess);
    if (this.props.signupSuccess === true) {
      return (
        <div>
          <h1>SUCCESS</h1>
          <Redirect
            to={{
              pathname: '/vendor'
            }}
          />
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
            <FormControl type="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col sm={2}>
           Phone Number
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="phoneNumber" value={this.state.phoneNumber} onChange={this.handlePhoneNumberChange} />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col sm={2}>
            Verify Password
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="Verify Password" value={this.state.verify} onChange={this.handleVerifyChange} />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col sm={2}>
            First Name
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="First Name" value={this.state.firstName} onChange={this.handleFirstNameChange} />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col sm={2}>
            Last Name
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="Last Name" value={this.state.lastName} onChange={this.handleLastNameChange} />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col sm={2}>
            Permit Number
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="Permit Number" value={this.state.permit} onChange={this.handlePermitChange} />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col sm={12}>
            <Button type="submit" bsStyle="success" block>
              Submit
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    signupSuccess: state.signupSuccess,
    signupError: state.signupError,
    signupLoading: state.signupLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signupFetch: (info) => dispatch(signupFetch(info))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OwnerSignup);
