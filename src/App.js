import React from 'react';
import './App.scss';
import Branding from './components/Branding/Branding'



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
        <Branding />
      </header>
    </div>
    )
  }
}

export default App;
