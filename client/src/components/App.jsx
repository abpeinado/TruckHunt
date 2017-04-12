import React from 'react';
import Header from './Header.jsx';
import MainMap from './MainMap.jsx';
import TruckList from './TruckList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <MainMap />
        <TruckList />
      </div>
    );
  }
}

export default App;

// should contain:
//   -Header
//   -Map
//   -TruckList
