import React, {Component} from 'react';
import './RandomPage.scss';
import axios from 'axios';
import Artist from '../../components/Results/Artist';
import Songs from '../../components/Results/Songs';

import {FAV_ARTISTS} from '../../favArtists';
import authToken from '../../controller/controller';


class RandomPage extends Component {
    constructor(props){
        super(props);
        this.state ={
            randomSong: []
        }
        this.renderFavArtists = this.renderFavArtists(this);
        this.getRandomSong = this.getRandomSong.bind(this);
        this.renderRandomSong = this.renderRandomSong.bind(this);
    }
    componentDidMount(){
        authToken.getAuthToken();
    }

    renderFavArtists(){
        return (
            FAV_ARTISTS.map((artist, index) => {
                return(
                    <Artist 
                    index={index}
                    id={artist.id}
                    artist={artist.name}
                    artistPic={artist.imageSrc}
                    getSong={() => this.getRandomSong(artist.id)}
                    />
                )
            })
        )
    }

    getRandomSong = async (id) => {
        try{
            const response = await axios.get(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=us&limit=1`);
            this.setState({
                randomSong: response.data.tracks
            })
        } catch (err){
            console.log(err);
        }
    }

    renderRandomSong(){
        let RNG = Math.floor(Math.random() * this.state.randomSong.length)
       
        return(
            <Songs 
                tracks={[this.state.randomSong[RNG]]}
            />
        )
    }

    
    render(){
        return(
            <div className="container random-container">
                <div className="row random-header header">
                    <h2>Get a random song from one of these artists.</h2>
                </div>
                <div className="favorites-row row">
                    {this.renderFavArtists}
                </div>
                <div className="random-song-row row">
                    {this.state.randomSong.length > 0 ? this.renderRandomSong() : null}
                </div>
            </div>
        )  
    }
}

export default RandomPage;