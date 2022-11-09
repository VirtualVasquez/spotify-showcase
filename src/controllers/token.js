const axios = require('axios').default

let client_id = process.env.REACT_APP_CLIENT_ID;
let client_secret = process.env.REACT_APP_CLIENT_SECRET;

////incase spotify doucmentation is misleading
// let client_credentials = 'application/x-www-form-urlencoded'

//Why do I need this?
let bearer


const getAuthToken = () => {
    try{

        //why do I need this?
        if(bearer) return bearer;

        const url =  'https://accounts.spotify.com/api/token'

        const authOptions = {

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
        .then(response => {
            axios.defaults.headers.common = {
                Authorization: 'Bearer ${response.data.access_token}'
            }
            return response.data.access_token;
        })

    } catch (err){
        console.log(err)
    }
}

module.exports = {
    getAuthToken
  }