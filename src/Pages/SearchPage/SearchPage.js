import React, {Component} from 'react';
import './SearchPage.scss';
import Songs from '../../components/Results/Songs';
import Artist from '../../components/Results/Artist';
import Album from '../../components/Results/Album';
import Search from '../../components/Search/Search';

import axios from 'axios';



class SearchPage extends Component {
    constructor(props){
        super(props);
        this.state ={
            searchInput: '',
            searchResults: [],
            radioValue: '',
        }
        this.renderSearchResults = this.renderSearchResults.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleRadioInput = this.handleRadioInput.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput = e => {
        this.setState({
            searchInput: e.target.value
        })
        console.log(this.state.searchInput);
    }
    handleRadioInput = e => {
        this.setState({
            searchResults: [], 
            radioValue: e.target.value
        });
    }

    handleSearch = async (event) => {

        event.preventDefault(); 
        
        if(this.state.searchInput === ''){
            return alert("You haven't written anything in the search input");
        }
        if(this.state.radioValue === ''){
            return alert("Make sure to select what type of query you want to make: Artists, Songs, or Albums")
        }
        try{
            const response = await axios.get(`https://api.spotify.com/v1/search?q=${this.state.searchInput}&type=${this.state.radioValue}&limit=5`)

            if(this.state.radioValue === 'artist'){
                this.setState({
                    searchResults: response.data.artists.items
                })
            } else if (this.state.radioValue === 'album'){
                this.setState({
                    searchResults: response.data.albums.items
                })
            } else if (this.state.radioValue === 'track'){
                this.setState({
                    searchResults: response.data.tracks.items
                })
            }
        } catch (err){
            console.log(err)
            alert(
                `There was an error in the application: ${err.response.data.error.message}`
            )
        }
        this.setState({
            searchInput: ''
        })
    }

    renderSearchResults() {
        if(this.state.searchResults.length === 0){
            return;
        }

        if (this.state.radioValue === 'artist') {

            return(
                this.state.searchResults.map((result, index) =>{
                    console.log(result.images[0]?.url)
                    return (
                    <Artist 
                      index={index}
                      id={result.id}
                      artist={result.name}
                      artistPic={result.images[0]?.url}
                      artistPage={result.external_urls.spotify}
                    />
                    )

                })
            )
        } 
        
        if (this.state.radioValue === 'album') {
            return(
                this.state.searchResults.map((result, index) =>{
                    return(
                      <Album 
                        key={result.id}
                        result={result}
                      />
                    )
                })
            )

        } 
        
        if (this.state.radioValue === 'track') {
            return(
                <Songs
                  tracks={this.state.searchResults}
                />
            )
                  
        }

        throw new Error('radio value is not valid');

    }

     
    render(){
        return(
            <div className="container" id="search-page">
                <div className="search-row row">
                    <Search
                      value={this.state.searchInput} 
                      handleUserInput={this.handleUserInput}
                      handleRadioInput={this.handleRadioInput}
                      handleSearch={this.handleSearch}
                    />
                </div>
                <div className="result-row row">
                    {this.renderSearchResults()}
                </div>
            </div>     
        )
    }

}

export default SearchPage;