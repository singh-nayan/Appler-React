import React from 'react';

const Movies =({movies})=> {
   
    let moviesIndices=Object.keys(movies); // as movies is an object so to see the list, we fisrt retreive the list of its key value and convert it into into an array using Object.keys function
     
    const movieItems = moviesIndices.map((moviesName, idx)=>{   // map is a JS function to iterate over an array 1st parameter moviesName is for the value of array and 2nd parameter is for index or position of the key value
        return (
            <tr>
            <td>{moviesName}</td>
            <td>{JSON.stringify(movies[moviesIndices[idx]].actor)}</td>
            <td>{JSON.stringify(movies[moviesIndices[idx]].genre)}</td>
            <td>{JSON.stringify(movies[moviesIndices[idx]].released)}</td>
            </tr>
        );                                                                     {/*to see the list on screen we have to convert the object into JSON String,because incoming response is an object and we cannot see the object on the UI directly, but string can be directly seen on the screen (UI), object can be seen in the consoleThe JSON.stringify() method converts a JavaScript value to a JSON string*/}   
    });

    return(
        <table>{movieItems}</table>
    )
}

export default Movies;

