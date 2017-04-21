import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import VendorSignup from './VendorSignup.jsx';
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import Header from '../components/Header.jsx';


class AuthenticationPortal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userWantsLogin: true,
      businessOwner: false
    };

    this.handleuserWantsLogin = this.handleuserWantsLogin.bind(this);
    this.handleBusinessOwner = this.handleBusinessOwner.bind(this);
  }

  handleBusinessOwner() {
    this.setState({
      businessOwner: !this.state.businessOwner
    });
  }

  handleuserWantsLogin() {
    this.setState({
      userWantsLogin: !this.state.userWantsLogin,
      businessOwner: false
    });
  }

  render() {
    const signup = !this.state.businessOwner ? <Signup /> : <VendorSignup />;
    return (
      <div>
        <Header />
        <div className="static-modal" >
          <Modal.Dialog>
            <Modal.Header>
              {this.state.userWantsLogin ?
                (<Modal.Title className="loginTitle">Login</Modal.Title>)
                : (<Modal.Title className="loginTitle">Signup</Modal.Title>)
              }
            </Modal.Header>
            <Modal.Body>
              {this.state.userWantsLogin ?
                (<Login />)
                : (signup)
              }
            </Modal.Body>
            <Modal.Footer className="footerWrapper">
              {this.state.userWantsLogin ?
                (<div>
                  <Button bsStyle="primary" onClick={this.handleuserWantsLogin}>Looking for signup?</Button>
                </div>)
                : (
                  <div>
                    <Button bsStyle="primary" onClick={this.handleuserWantsLogin}>Already a user?</Button>
                    {this.state.businessOwner ?
                      (<Button bsStyle="primary" onClick={this.handleBusinessOwner}>Customer Signup</Button>) :
                      (<Button bsStyle="primary" onClick={this.handleBusinessOwner}>Vendor Signup</Button>)
                    }
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
