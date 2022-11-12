import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.scss';
import axios from 'axios';
import Branding from './components/Branding/Branding';
import NavMenu from './components/NavMenu/NavMenu';
import HomePage from './components/Pages/HomePage/HomePage';
import SearchPage from './components/Pages/SearchPage/SearchPage';
import RandomPage from './components/Pages/RandomPage/RandomPage';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      bearerToken: '',
    }
    //this.function = this.function.bind(this);
  }

  componentDidMount(){
    let client_id = process.env.REACT_APP_CLIENT_ID;
    let client_secret = process.env.REACT_APP_CLIENT_SECRET;

    try{

        const url = 'https://accounts.spotify.com/api/token';
    
        const authOptions={
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            auth:{
                username: client_id,
                password: client_secret
            }
        }
        return axios
        .post(url, 'grant_type=client_credentials', authOptions)
        .then(response =>{
            axios.defaults.headers.common = {
                Authorization: `Bearer ${response.data.access_token}`
            }
            this.setState({
                bearerToken: response.data.access_token
            })
        })

    } catch (err){
        console.log(err)
    }
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

                  <Route 
                  exact path="/search" 
                  element={
                  <SearchPage
                  bearer={this.state.bearerToken}
                  />
                  }/>

                  <Route 
                  exact path="/library" 
                  element={
                  <RandomPage
                  bearer={this.state.bearerToken}
                  />}/>

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
