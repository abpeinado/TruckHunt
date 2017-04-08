import React from 'react';
import { render } from 'react-dom';
import renderer from 'react-test-renderer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <h1 style={{ textAlign: 'center', fontSize: '12em', color: '#ffffff' }}>Hello World</h1>
    );
  }
}

render(<App />, document.getElementById('app'));

