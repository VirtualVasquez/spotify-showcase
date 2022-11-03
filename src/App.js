import React from 'react';
import './App.scss';
import Branding from './components/Branding/Branding';
import NavMenu from './components/NavMenu/NavMenu';
import PageDisplay from './components/PageDisplay/PageDisplay';



class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
    //this.function = this.function.bind(this);
  }

  render(){
    return(
      <div className="App">
        <div className="row">
          <NavMenu />
          <PageDisplay />
          <Branding />
        </div>
    </div>
    )
  }
}

export default App;
