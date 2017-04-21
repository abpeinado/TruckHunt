/* eslint-disable object-shorthand */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import { mapCenterUpdate } from '../actions/mapCenterActions.js';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      geocodeResults: null,
      loading: false
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderGeocodeFailure = this.renderGeocodeFailure.bind(this);
    this.renderGeocodeSuccess = this.renderGeocodeSuccess.bind(this);
  }

  handleSelect(address) {
    this.setState({
      address,
      loading: true
    });

    geocodeByAddress(address, (err, { lat, lng }) => {
      if (err) {
        console.log('Geocoding Error', err);
        this.setState({
          geocodeResults: this.renderGeocodeFailure(err),
          loading: false
        });
      }
      console.log(`Success -> latitude and longitude for ${address}`, { lat, lng });
      this.setState({
        geocodeResults: this.renderGeocodeSuccess(lat, lng),
        loading: false
      });
    });
  }

  handleChange(address) {
    this.setState({
      address,
      geocodeResults: null
    });
  }

  renderGeocodeFailure(err) {
    return (
      <div className="alert alert-danger" role="alert">
        <strong>Error!</strong> {err}
      </div>
    );
  }

  renderGeocodeSuccess(lat, lng) {
    const newCoordinates = { lat: lat, lng: lng };

    this.props.mapCenterUpdate(newCoordinates);

    // remove for Production... this should help for development
    return (
      <div className="alert alert-success" role="alert">
        <strong>Success!</strong> Geocoder found latitude and longitude: <strong>{lat}, {lng}</strong>
      </div>
    );
  }

  render() {
    // included with autocomplete... will revise styles at later data
    const cssClasses = {
      root: 'form-group',
      input: 'Demo__search-input',
      autocompleteContainer: 'Demo__autocomplete-container'
    };

    const AutocompleteItem = ({ formattedSuggestion }) => (
      <div >
        <strong>{formattedSuggestion.mainText}</strong>{' '}
        <small>{formattedSuggestion.secondaryText}</small>
      </div>);

    const inputProps = {
      type: 'text',
      value: this.state.address,
      onChange: this.handleChange,
      onBlur: () => { console.log('Blur event!'); },
      onFocus: () => { console.log('Focused!'); },
      autoFocus: true,
      placeholder: 'Search Places'
    };

    return (
      <div>
        <div>
          <PlacesAutocomplete
            onSelect={this.handleSelect}
            autocompleteItem={AutocompleteItem}
            onEnterKeyDown={this.handleSelect}
            classNames={cssClasses}
            inputProps={inputProps}
          />
          {this.state.loading ? null : null}
          {!this.state.loading && this.state.geocodeResults ?
            <div className="geocoding-results">{this.state.geocodeResults}</div> :
          null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mapCenter: state.mapCenter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    mapCenterUpdate: (coordinates) => dispatch(mapCenterUpdate(coordinates))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);


// OLD SEARCH FOR SERVER CALL REFERENCE-- WILL TAKE OUT WHEN CONNECTED
// class Search extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       address: 'San Francisco, CA'
//     };
//     // this.onChange = (address) => this.setState({ address });
//     this.handleChange = this.handleChange.bind(this);
//     this.findFoodTrucks = this.findFoodTrucks.bind(this);
//   }

//   handleChange(event) {
//     this.setState({
//       address: event.target.value
//     });
//   }

//   findFoodTrucks(address) {
//     const init = {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json'
//       },
//       body: JSON.stringify({
//         text: address
//       })
//     };
//     fetch('/search', init)
//       .then((response) => {
//         console.log('here ', response.statusText);
//       })
//       .catch((error) => {
//         console.log('fetch failed, error: ', error);
//       });
//   }

//   // handleFormSubmit(event) {
//   //   event.preventDefault();

//   //   geocodeByAddress(this.state.address, (err, latLng) => {
//   //     if (err) { console.log('Oh no!', err); }

//   //     console.log(`Yay! Got latitude and longitude for ${this.state.address}`, latLng);
//   //   });
//   // }


//   render() {
//     // const inputProps = {
//     //   value: this.state.address,
//     //   onChange: this.onChange
//     // };

//     return (
//       <Navbar.Form pullRight>
//         <FormGroup>
//           <FormControl bsSize="large" type="text" placeholder="Search" onChange={this.handleChange} />
//         </FormGroup>
//         {' '}
//         <Button bsSize="large" type="submit" onClick={() => this.findFoodTrucks(this.state.address)}>Find Trucks!</Button>
//       </Navbar.Form>
//     );
//   }
// }

// export default Search;

      // <form onSubmit={this.handleFormSubmit}>
        // <PlacesAutocomplete inputProps={inputProps} />
        // <button type="submit">Submit</button>
      // </form>
