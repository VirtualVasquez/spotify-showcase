import React from 'react';
import './App.scss';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
    //this.function = this.function.bind(this);
  }

  render(){
    return(
      <div className="App">
      <header className="App-header">
        <h1>header</h1>
      </header>
    </div>
    )
  }
}

export default App;
