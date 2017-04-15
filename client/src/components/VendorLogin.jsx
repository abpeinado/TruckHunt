import React from 'react';
import { FieldGroup, FormControl, Button, FormGroup, Form, Col, Checkbox } from 'react-bootstrap';

class UserLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
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

  handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    const user = this.state.username;
    const pass = this.state.password;

    if (user !== null && pass !== null) {
      console.log('inside handleSubmit, checking user:', user);
      console.log('inside handleSubmit, checking pass:', pass);
      // dispatch fetch function saved in redux
      // login(user, pass)
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
    return (

      <Form horizontal onSubmit={this.handleSubmit}>
        <FormGroup controlId="formHorizontalEmail">
          <Col sm={2}>
            Username
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="Username" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="Password" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Checkbox>Remember me</Checkbox>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit">
              Login
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default UserLogin;
      // <div className="formWrapper">
        // <form onSubmit={this.handleSubmit}>
          // <div className="loginInput">
            // <input type="text" placeholder="username" value={this.state.username} onChange={this.handleUsernameChange} />
          // </div>
          // <div className="loginInput">
            // <input type="text" placeholder="password" value={this.state.password} onChange={this.handlePasswordChange} />
          // </div>
        // </form>
      // </div>
