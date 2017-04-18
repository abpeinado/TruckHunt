import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import Signup from './VendorSignup.jsx';
import Login from './VendorLogin.jsx';


class AuthenticationPortal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authToggle: true
    };

    this.handleAuthToggle = this.handleAuthToggle.bind(this);
  }

  handleAuthToggle() {
    this.setState({
      authToggle: !this.state.authToggle
    });
  }

  render() {
    return (
      <div>
        <div className="static-modal" >
          <Modal.Dialog>
            <Modal.Header>
              {this.state.authToggle ?
                (<Modal.Title className="loginTitle">Login</Modal.Title>)
                : (<Modal.Title className="loginTitle">Signup</Modal.Title>)
              }
            </Modal.Header>

            <Modal.Body>
              {this.state.authToggle ?
                (<Login />)
                : (<Signup />)
              }
            </Modal.Body>

            <Modal.Footer className="footerWrapper">
              {this.state.authToggle ?
                (<div>
                  <Button bsStyle="primary" onClick={this.handleAuthToggle}>Looking for signup?</Button>
                </div>)
                : (
                  <div>
                    <Button bsStyle="primary" onClick={this.handleAuthToggle}>Already a user?</Button>
                  </div>
                  )
              }

            </Modal.Footer>
          </Modal.Dialog>
        </div>
      </div>
    );
  }
}

export default AuthenticationPortal;
