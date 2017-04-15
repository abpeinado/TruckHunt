// Signup page for truck owners
import React from 'react';
// import { signup } from ''
import { FieldGroup, FormControl, Button, FormGroup, Form, Col, Checkbox } from 'react-bootstrap';
import { connect } from 'react-redux';
import { signupFetch } from '../actions/signupActions.js';

class OwnerSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      verify: '',
      firstName: '',
      lastName: '',
      email: ''
    };
    this.handlePhotoUpload = this.handlePhotoUpload.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleVerifyChange = this.handleVerifyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
  }

  handlePhotoUpload(event) {
    console.log('inside photo upload handler', event);
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value
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

    const user = this.state.username;
    const pass = this.state.password;
    const verify = this.state.verify;
    const email = this.state.email;
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;

    const userInfo = {
      user,
      pass,
      verify,
      email,
      firstName,
      lastName
    };

    console.log('userInfo', userInfo);

    console.log('insideHandleSubmitOwner', user);
    console.log('insideHandleSubmitOwner', pass);
    console.log('insideHandleSubmitOwner', verify);
    // check db to see if username is available
    // constant ajax call saved inside redux store
    // if available check passwords match
    // TODO: add logic for password integrity
    if (pass === verify) {
      console.log('inside handleSubmit, passwords match');
      // dispatch fetch function saved in redux
      this.props.signupFetch(userInfo);
      this.setState({
        username: '',
        password: '',
        verify: ''
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
        <h1>SUCCESS</h1>
      );
    }
    return (
      <Form horizontal onSubmit={this.handleSubmit}>
        <FormGroup >
          <Col sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl type="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
          </Col>
        </FormGroup>

        <FormGroup >
          <Col sm={2}>
            Username
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="Username" value={this.state.username} onChange={this.handleUsernameChange} />
          </Col>
        </FormGroup>

        <FormGroup >
          <Col sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} />
          </Col>
        </FormGroup>

        <FormGroup >
          <Col sm={2}>
            Verify Password
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="Verify Password" value={this.state.verify} onChange={this.handleVerifyChange} />
          </Col>
        </FormGroup>

        <FormGroup >
          <Col sm={2}>
            First Name
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="First Name" value={this.state.firstName} onChange={this.handleFirstNameChange} />
          </Col>
        </FormGroup>

        <FormGroup >
          <Col sm={2}>
            Last Name
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="Last Name" value={this.state.lastName} onChange={this.handleLastNameChange} />
          </Col>
        </FormGroup>

        <FormGroup >
          <Col sm={2}>
            Photo Upload
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="Photo Upload" onClick={this.handlePhotoUpload} />
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

          //  <form onSubmit={this.handleSubmit}>
          //   <FieldGroup
          //     id="formControlsText"
          //     type="email"
          //     label="Email address"
          //     placeholder="Enter email"
          //   />
          //   <FieldGroup
          //     id="formControlsText"
          //     type="text"
          //     label="Username"
          //     placeholder="Enter username"
          //   />
          //   <FieldGroup
          //     id="formControlsText"
          //     type="password"
          //     label="Password"
          //     placeholder="Enter password"
          //   />
          // </form>

          // <div className="signupInput">
          //   <input type="text" placeholder="email" value={this.state.email} onChange={this.handleEmailChange} />
          // </div>
          // <div className="signupInput">
          //   <input type="text" placeholder="username" value={this.state.username} onChange={this.handleUsernameChange} />
          // </div>
          // <div className="signupInput">
          //   <input type="password" placeholder="password" value={this.state.password} onChange={this.handlePasswordChange} />
          // </div>
          // <div className="signupInput">
          //   <input type="password" placeholder="verify" value={this.state.verify} onChange={this.handleVerifyChange} />
          // </div>
          // <div className="signupInput">
          //   <input type="text" placeholder="First Name" value={this.state.firstName} onChange={this.handleFirstNameChange} />
          // </div>
          // <div className="signupInput">
          //   <input type="text" placeholder="Last Name" value={this.state.lastName} onChange={this.handleLastNameChange} />
          // </div>
          // <div className="signupInput">
          //   <input type="text" value="Photo Upload" onClick={this.handlePhotoUpload} />
          // </div>
          // <div className="submitButton">
          //   <input type="submit" value="Submit" />
          // </div>
