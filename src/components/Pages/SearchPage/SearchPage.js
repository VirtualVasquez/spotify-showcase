import React, {Component} from 'react';
import './SearchPage.scss';
import Songs from '../../Results/Songs';
import Artist from '../../Results/Artist';
import Album from '../../Results/Album';
import Search from '../../Search/Search';

import authToken from '../../../controller/controller';
import axios from 'axios';
import { Dropdown } from 'bootstrap';

authToken.getAuthToken()


class SearchPage extends Component {
    constructor(props){
        super(props);
        this.state ={
            searchInput: '',
            searchResults: [],
            radioValue: '',
        }
        //this.function = this.function.bind(this);
    }

    handleRadioInput(event){
        this.setState({ radioValue: event.target.value});
    }

    handleSearch = async (event) => {
        try{
            const response = await axios.get('https://api.spotify.com/v1/search?q=michael%20jackson&type=artist&limit=5')

            if(this.state.radioValue === 'artist'){
                this.setState({
                    searchResults: response.data.artists.items
                })
            } else if (this.state.radioValue === ' album'){
                this.setState({
                    searchResults: response.data.album.items
                })
            } else if (this.state.radioValue === 'track'){
                this.setState({
                    searchResults: response.data.tracks
                })           
            }
        } catch (err){
            console.log(err)
        }
        this.setState({
            searchInput: ''
        })
    }

    renderSearchResults = this.state.searchResults.map(result =>{
        if (this.state.searchResults === 'artist') {

        } else if (this.state.radioValue === ' album') {

        } else if (this.state.radioValue === 'track') {
      
        }
      }
    )
     
    render(){
        return(
            <div className="container" id="search-page">
                <div className="search-row row">
                    <Search />
                </div>
                <div className="result-row row">
                </div>
            </div>     
        )
    }

}

export default SearchPage;