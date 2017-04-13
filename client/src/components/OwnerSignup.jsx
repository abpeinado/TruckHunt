// Signup page for truck owners
import React from 'react';
// import { signup } from ''
import { connect } from 'react-redux';
import { signup } from '../actions/signupActions.js';

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
    this.handlePhotoUpload = this.handlePhotoUpload.bind(this);
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

  handleVerifyChange(event) {
    this.setState({
      verify: event.target.value
    });
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
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
    event.stopPropagation();

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
      this.props.signup(userInfo);
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
    return (
      <div className="formWrapper">
        <form onSubmit={this.handleSubmit}>
          <div className="signupInput">
            <input type="text" value="JOIN THE HUNT" />
          </div>
          <div className="signupInput">
            <input type="text" placeholder="email" value={this.state.email} onChange={this.handleEmailChange} />
          </div>
          <div className="signupInput">
            <input type="text" placeholder="username" value={this.state.username} onChange={this.handleUsernameChange} />
          </div>
          <div className="signupInput">
            <input type="password" placeholder="password" value={this.state.password} onChange={this.handlePasswordChange} />
          </div>
          <div className="signupInput">
            <input type="password" placeholder="verify" value={this.state.verify} onChange={this.handleVerifyChange} />
          </div>
          <div className="signupInput">
            <input type="text" placeholder="First Name" value={this.state.firstName} onChange={this.handleFirstNameChange} />
          </div>
          <div className="signupInput">
            <input type="text" placeholder="Last Name" value={this.state.lastName} onChange={this.handleLastNameChange} />
          </div>
          <div className="signupInput">
            <input type="text" value="Photo Upload" onClick={this.handlePhotoUpload} />
          </div>
          <div className="submitButton">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (info) => dispatch(signup(info))
  };
};

export default connect(null, mapDispatchToProps)(OwnerSignup);

