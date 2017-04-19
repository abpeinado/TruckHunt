import React from 'react';
import { FieldGroup, FormControl, Button, FormGroup, Form, Col, Checkbox } from 'react-bootstrap';
import { connect } from 'react-redux';
import { loginAttempt } from '../actions/loginActions.js';

class UserLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      verify: ''
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleVerifyChange = this.handleVerifyChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleVerifyChange(event) {
    this.setState({
      verify: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    const user = this.state.username;
    const pass = this.state.password;
    const verify = this.state.verify;
    const userInfo = ({
      user,
      pass,
      url: '/userSignup'
    });

    if (user !== null && pass !== null && verify === pass) {
      // send userInfo to server
      this.props.loginAttempt(userInfo);

      // reset field values
      this.setState({
        username: '',
        password: '',
        verify: ''
      });
    } else {
      // TODO: conditional render passwords don't match
      console.log('inside handleSubmit LOGIN, bad combo');
    }
  }

  render() {
    return (

      <Form horizontal onSubmit={this.handleSubmit} className="loginForm">
        <FormGroup controlId="formHorizontalEmail">
          <Col sm={12}>
            Username
          </Col>
          <Col sm={12}>
            <FormControl type="text" placeholder="Username" value={this.state.username} onChange={this.handleUsernameChange} />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col sm={12}>
            Password
          </Col>
          <Col sm={12}>
            <FormControl type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col sm={12}>
            Verify Password
          </Col>
          <Col sm={12}>
            <FormControl type="password" placeholder="Verify Password" value={this.state.verify} onChange={this.handleVerifyChange} />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col sm={12}>
            <Checkbox>Remember me</Checkbox>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col sm={12}>
            <Button type="submit">
              Signup
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
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
