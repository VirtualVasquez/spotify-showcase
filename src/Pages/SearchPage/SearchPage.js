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
            radioValue: 'track',
        }
        //this.function = this.function.bind(this);
        this.renderSearchResults = this.renderSearchResults.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        // this.handleUserInput = this.handleUserInput.bind(this);
    }

    componentDidMount(){
        authToken.getAuthToken();
    }

    // handleUserInput = e => {
    //     this.setState({
    //         searchInput: e.target.value
    //     })
    // }
    // handleRadioInput = e => {
    //     this.setState({ 
    //         radioValue: e.target.value
    //     });
    // }

    handleSearch = async (event) => {
        try{
            const response = await axios.get('https://api.spotify.com/v1/search?q=michael%20jackson&type=track&limit=5')

            // if(this.state.radioValue === 'artist'){
            //     this.setState({
            //         searchResults: response.data.artists.items
            //     })
            // } else if (this.state.radioValue === ' album'){
            //     this.setState({
            //         searchResults: response.data.albums.items
            //     })
            // } else if (this.state.radioValue === 'track'){
            if (this.state.radioValue === 'track'){
                // console.log(response.data.tracks.items);           
                this.setState({
                    searchResults: response.data.tracks.items
                })
                // console.log(this.state.searchResults);           
            }
        } catch (err){
            console.log(err)
        }
        // this.setState({
        //     searchInput: ''
        // })
    }

    renderSearchResults() {
        if(this.state.searchResults.length > 0){
            // if (this.state.searchResults === 'artist') {
            //     return(
            //         this.state.searchResults.map(result =>{
            //             <Artist 
            //               key={result.id}
            //               artist={result}
            //               artistPic={result}
            //             //   radioValue={this.state.radioValue}
            //             />
            //         })
            //     )
            // } 
            // else if (this.state.radioValue === ' album') {
            //     return(
            //         this.state.searchResults.map(result =>{
            //             <Album 
            //               key={result.id}
            //               artist={result}
            //               albumPic={result}
            //             //   radioValue={this.state.radioValue}
            //             />
            //         })
            //     )
    
            // } 
            // else if (this.state.radioValue === 'track') {
            if (this.state.radioValue === 'track') {
                console.log("rendering tracks");
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
        console.log("I am here");
        console.log(this.state.searchResults);
        console.log("I am gone");
        return(
            <div className="container" id="search-page">
                <div className="search-row row">
                    <Search 
                    //   handleUserInput={this.handleUserInput}
                    //   handleRadioInput={this.handleRadioInput}
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