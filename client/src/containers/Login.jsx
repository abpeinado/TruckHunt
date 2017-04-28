import React from 'react';
import { FormControl, Button, FormGroup, Form, Col, Checkbox } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { loginAttempt } from '../actions/signupActions.js';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      businessOwner: false
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleBusinessOwner = this.handleBusinessOwner.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    console.log('setUserID: ', this.props.setUserID);
  }

  handleBusinessOwner() {
    this.setState({
      businessOwner: !this.state.businessOwner
    });
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

  handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    const user = this.state.username;
    const pass = this.state.password;
    const businessOwner = this.state.businessOwner;
    const userInfo = ({
      user,
      pass,
      url: ''
    });

    if (user !== null && pass !== null) {
      // send userInfo to server
      if (businessOwner) {
        userInfo.url = '/vendorLogin';
        this.props.loginAttempt(userInfo);
      } else {
        userInfo.url = '/userLogin';
        this.props.loginAttempt(userInfo);
      }
      // reset field values
      this.setState({
        username: '',
        password: ''
      });
    } else {
      // TODO: conditional render passwords don't match
      console.log('inside handleSubmit LOGIN, bad combo');
    }
  }

  render() {
    console.log(this.props.vendorLoginSuccess);
    console.log(this.props.loginSuccess);
    if (this.props.loginSuccess) {
      return (
        // Redirect to vendor portal if successful
        <Redirect
          to={{
            pathname: '/'
          }}
        />
      );
    } else if (this.props.vendorLoginSuccess) {
      return (
        // Redirect to vendor portal if successful
        <Redirect
          to={{
            pathname: '/vendor'
          }}
        />
      );
    }
    return (
      <Form horizontal onSubmit={this.handleSubmit} className="loginForm">
        <FormGroup controlId="formHorizontalEmail">
          <Col sm={12}>
            <h5>Username</h5>
          </Col>
          <Col sm={12}>
            <FormControl type="text" placeholder="Username" value={this.state.username} onChange={this.handleUsernameChange} />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col sm={12}>
            <h5>Password</h5>
          </Col>
          <Col sm={12}>
            <FormControl type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} />
          </Col>
        </FormGroup>
        {this.props.loginError &&
          <span><h4>try again...</h4></span>
        }
        <FormGroup>
          <Col sm={12}>
            <Checkbox onChange={this.handleBusinessOwner}>Business Owner</Checkbox>
            <Checkbox>Remember me</Checkbox>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col sm={12}>
            <Button type="submit">
              Login
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loginError: state.loginError,
    loginSuccess: state.loginSuccess,
    loginLoading: state.loginLoading,
    vendorLoginSuccess: state.vendorLoginSuccess,
    setUserID: state.setUserID
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginAttempt: (info) => dispatch(loginAttempt(info))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
