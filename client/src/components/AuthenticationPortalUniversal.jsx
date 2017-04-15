import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import Signup from './VendorSignup.jsx';
import Login from './VendorLogin.jsx';


class AuthenticationPortal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authToggle: false
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
          <Modal.Dialog style={{ marginTop: '20em' }}>
            <Modal.Header>
              {this.state.authToggle ?
                (<Modal.Title style={{ textAlign: 'center' }} >Start Hunting</Modal.Title>)
                : (<Modal.Title style={{ textAlign: 'center' }} >Join the Hunt</Modal.Title>)
              }
            </Modal.Header>

            <Modal.Body>
              {this.state.authToggle ?
                (<Login />)
                : (<Signup />)
              }
            </Modal.Body>

            <Modal.Footer>
              {this.state.authToggle ?
                (<div style={{ textAlign: 'center' }}>
                  <Button bsStyle="primary" onClick={this.handleAuthToggle}>New to Truck Hunt?</Button>
                </div>)
                : (
                  <div style={{ textAlign: 'center' }}>
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
