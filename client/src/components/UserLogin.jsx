import React from 'react';

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
      <div className="formWrapper">
        <form onSubmit={this.handleSubmit}>
          <div className="loginInput">
            <input type="text" placeholder="username" value={this.state.username} onChange={this.handleUsernameChange} />
          </div>
          <div className="loginInput">
            <input type="text" placeholder="password" value={this.state.password} onChange={this.handlePasswordChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default UserLogin;