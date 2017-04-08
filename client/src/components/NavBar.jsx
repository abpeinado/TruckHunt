import React, { Component } from 'react';
import { connect } from 'react-redux';

class NavBar extends Component {

  setCurrentAddress(event) {
    this.props.setInput(event.target.value);
  }

  searchBar() {
    this.props.fetchData('./search', this.props.setSearchInput);
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.props.setCurrentAddress} />
        <button onClick={ () => { this.initUserBalance(this.props.) }}>Find Trucks</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    input: state.searchInput
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: url => dispatch(itemsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
