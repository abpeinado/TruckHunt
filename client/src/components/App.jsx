import React from 'react';
import Header from './Header.jsx';
import Map from './Map.jsx';
import TruckList from './TruckList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center', fontSize: '12em', color: '#ffffff' }}>Hello World</h1>
        <Header />
        <TruckList />
        <Map />
      </div>
    );
  }
}

export default App;

// should contain:
//   -Header
//   -Map
//   -TruckList
