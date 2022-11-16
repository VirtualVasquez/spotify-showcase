import React, {Component} from 'react';
import './SearchPage.scss';
import Songs from '../../components/Results/Songs';
import Artist from '../../components/Results/Artist';
import Album from '../../components/Results/Album';
import Search from '../../components/Search/Search';

import authToken from '../../controller/controller';
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

    componentDidMount(){
        authToken.getAuthToken();
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
        console.log(this.state.searchInput);
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
        }
        this.setState({
            searchInput: ''
        })
    }

    renderSearchResults() {
        if(this.state.searchResults.length > 0){

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
            else if (this.state.radioValue === 'album') {
                return(
                    this.state.searchResults.map((result, index) =>{
                        return(
                          <Album 
                            index={index}
                            id={result.id}
                            artist={result.artists[0].name}
                            albumName={result.name}
                            albumPic={result.images[1]?.url}
                            albumPage={result.external_urls.spotify}
                            albumYear={result.release_date.substr(0,4)}
                          />
                        )
                    })
                )
    
            } 
            else if (this.state.radioValue === 'track') {
                return(
                    <Songs
                      tracks={this.state.searchResults}
                      radioValue={this.state.radioValue}
                    />
                )
                      
            }
        }
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