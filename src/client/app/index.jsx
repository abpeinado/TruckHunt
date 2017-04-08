import React from 'react';
import { render } from 'react-dom';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }

  render(){
    return(
      <h1 style={{'text-align':'center', 'font-size':'12em', 'color':'#ffffff'}}>Hello World</h1>
    )
  }
}

render(<App/>, document.getElementById('app'));

