import React from 'react';
import { FieldGroup, FormControl, Button, FormGroup, Form, Col, Checkbox } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginAttempt } from '../actions/loginActions.js';

class UserLogin extends React.Component {
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

  handleBusinessOwner(event) {
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
    if (this.props.loginSuccess) {
      return (
        <div>
          <Redirect
            to={{
              pathname: '/'
            }}
          />
        </div>
      );
    } else {
      return (
        <Form horizontal onSubmit={this.handleSubmit} className="loginForm">
          <FormGroup controlId="formHorizontalEmail">
            <Col sm={12}>
              <h3>Username</h3>
            </Col>
            <Col sm={12}>
              <FormControl type="text" placeholder="Username" value={this.state.username} onChange={this.handleUsernameChange} />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col sm={12}>
              <h3>Password</h3>
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
}

const mapStateToProps = (state) => {
  return {
    loginSuccess: state.loginSuccess,
    loginError: state.loginError,
    loginLoading: state.loginLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginAttempt: (info) => dispatch(loginAttempt(info))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
