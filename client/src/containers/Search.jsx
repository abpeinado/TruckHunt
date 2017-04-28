/* eslint-disable object-shorthand */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import { mapCenterUpdate } from '../actions/mapActions.js';
import { truckListFetchData } from '../actions/truckListActions.js';

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
        this.setState({
          geocodeResults: this.renderGeocodeFailure(err),
          loading: false
        });
      }
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
    this.props.truckListFetchData('/search', this.props.mapCenter, this.props.mapDate);
  }

  render() {
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
    mapDate: state.mapDate,
    mapCenter: state.mapCenter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    mapCenterUpdate: (coordinates) => dispatch(mapCenterUpdate(coordinates)),
    truckListFetchData: (url, location, locationDate) => dispatch(truckListFetchData(url, location, locationDate))

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
