import React, { Component } from 'react';
import Movies from './nodeAPI';

class nodeAPI extends Component {
    constructor(){
        super();
        this.state={
            movies:{},
            loading:true

        }
    }
    componentDidMount(){                //componentDidMount is lifecycle function in react which 
        this.getData();                //is called after the component is mounted on the virtual DOM 
         console.log("second");
    }

    getData(){
        fetch('http://10.1.0.81:3003/movies')      // to make an async call we use fetch function which  
        .then((Response)=>Response.json())         // receives the response and convert it into json 
        .then((Response)=>                         // then it passes the response into setState function
        {                                          // so it will change the state of movies to movie list 
            console.log(Response);                 // received in json format
            this.setState(
                {
                movies:Response,
                loading:false
                }   
            )
        })
    }
    
    render() {
        if(this.state.loading){
            return(
                <h1>Loading...</h1>
            )
        }
        return (
            <div>
            <Movies 
            movies={this.state.movies} 
            />       
            </div>
           )
        }
}

export default nodeAPI;
