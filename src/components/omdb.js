import React,{Component} from 'react';

class omdb extends Component{
    constructor(){
        super();
        this.state={
            title:'',
            details:''
        }   
    }

    getMovieDetail(title){
        fetch("https://www.omdbapi.com/?t="+title+"&apikey=f87aa7b8")
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
            this.setState({details:res});
        })
    }

    render(){

        const {Poster,Actors,Director,imdbRating,Plot,Awards,Year}=this.state.details;
        
        return(
            <div>
                <input 
                style={{padding:"10px"}}
                placeholder="title"
                onChange={event=>{
                    console.log(event.target.value);
                    this.setState({title:event.target.value})
                }} />
                
                <div>
                    <button 
                    style={{padding:"5px"}}
                    onClick={()=>this.getMovieDetail(this.state.title)}>Get details</button>
                    <div>
                    <h3>Actors:{Actors}</h3>
                    <h3>Director:{Director}</h3>
                    <h3>Rating:{imdbRating}</h3>
                    <h3>Plot:{Plot}</h3>
                    <h3>Awards:{Awards}</h3>
                    <h3>Year:{Year}</h3>
                    <img src={Poster} alt=""/>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default omdb;