import React, {Component} from 'react';
import './SearchPage.scss';
import axios from 'axios';
import Songs from '../../Results/Songs';
import Artist from '../../Results/Artist';
import Album from '../../Results/Album';
import Search from '../../Search/Search';





class SearchPage extends Component {
    constructor(props){
        super(props);
        this.state ={
            token:'',
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
                    token: response.data.access_token
                })
            })
    
        } catch (err){
            console.log(err)
        }
    }

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