import React, { useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.scss';
import Branding from './components/Branding/Branding';
import NavMenu from './components/NavMenu/NavMenu';
import HomePage from './Pages/HomePage/HomePage';
import SearchPage from './Pages/SearchPage/SearchPage';
import RandomPage from './Pages/RandomPage/RandomPage';

import authToken from './controller/controller';




function App(){

  useEffect(() => {
    authToken.getAuthToken();
  }, [])

    return(
      <Router>
        <div className="App">
          <div className="app-row row">
            <NavMenu />
              <main className="col-sm-10 col-xs-12">
                <Routes>
                  <Route exact path="/" element={<HomePage />} />
                  <Route exact path="/spotify-showcase" element={<HomePage />} />
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

export default App;