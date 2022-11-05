import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.scss';
import Branding from './components/Branding/Branding';
import NavMenu from './components/NavMenu/NavMenu';
import HomePage from './components/Pages/HomePage/HomePage';
import SearchPage from './components/Pages/SearchPage/SearchPage';
import RandomPage from './components/Pages/RandomPage/RandomPage';




class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
    //this.function = this.function.bind(this);
  }

  render(){
    return(
      <Router>
        <div className="App">
          <div className="app-row row">
            <NavMenu />
              <main className="col-sm-10 col-xs-12">
                <Routes>
                  <Route exact path="/" element={<HomePage />} />
                  <Route exact path="/search" element={<SearchPage/>}/>
                  <Route exact path="/library" element={<RandomPage/>}/>
                </Routes>
              </main>
            <Branding />
          </div>
        </div>
      </Router>

    )
  }
}

export default App;
