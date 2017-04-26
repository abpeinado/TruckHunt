import React from 'react';
import { Segment, Header, Rating } from 'semantic-ui-react';
import { connect } from 'react-redux';


class TruckInfoSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const truck = this.props.truckSelected;

    return (
      <Segment inverted color="orange" className="animated fadeInDown menuHeader">
        <Header as="h1" icon textAlign="center">
          <Header.Content>
            {truck.vendor_name}
          </Header.Content>
        </Header>
        <Header as="h3" textAlign="center">
          <Header.Content>
            {truck.food_category}
          </Header.Content>
        </Header>
        <Header textAlign="center">
          <Rating icon="star" defaultRating={truck.rating} maxRating={5} size="huge" />
        </Header>
      </Segment>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    truckSelected: state.truckSelected
  };
};

export default connect(mapStateToProps)(TruckInfoSummary);
