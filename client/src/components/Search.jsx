import React, { Component } from 'react';

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
      <div>
        <p>Enter Address To Find Fuego Trucks Near You</p>
        <input type="text" onChange={this.handleChange} />
        <button type="button" onClick={() => this.findFoodTrucks(this.state.address)}>
          Find Trucks!
        </button>
      </div>
    );
  }
}

export default Search;
