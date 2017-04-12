import React, { Component } from 'react';
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.findFoodTrucks = this.findFoodTrucks.bind(this);
  }

  handleChange(event) {
    this.setState({
      address: event.target.value
    });
  }

  findFoodTrucks(address) {
    const init = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        text: address
      })
    };
    fetch('/foodTrucks', init)
      .then((response) => {
        console.log('here ', response.statusText);
      })
      .catch((error) => {
        console.log('fetch failed, error: ', error);
      });
  }

  render() {
    return (
      <Navbar.Form pullRight>
        <FormGroup>
          <FormControl bsSize="large" type="text" placeholder="Search" onChange={this.handleChange} />
        </FormGroup>
        {' '}
        <Button bsSize="large" type="submit" onClick={() => this.findFoodTrucks(this.state.address)}>
        Find Trucks!</Button>
      </Navbar.Form>
    );
  }
}

export default Search;
