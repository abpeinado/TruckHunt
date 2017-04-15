import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import TruckMenuGroup from './TruckMenuGroup.jsx';

export class TruckMenuComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log('this.props.menu', this.props.menu)
    return (
      <Row>
        <Col md={12}>
          {this.props.menu.map((menuGroup, i) =>
            <TruckMenuGroup menuGroup={menuGroup} key={i} />
          )}
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    menu: state.truckInfo.menu
  };
};

const TruckMenu = connect(mapStateToProps)(TruckMenuComponent);
export default TruckMenu;
