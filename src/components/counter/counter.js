import React from 'react';

const Counter = ({Count,increment,decrement}) =>{  
// function based component receives three props -Count,increment,decrement props from App
  return(
    <div>
      <button onClick={()=>increment(Count)}>++</button>  
      {/*whenever we click the ++ button it will call the callback function in the app class */} 
      <button onClick={()=>decrement(Count)}>--</button>
        <div>Counter:{Count}   
        </div>
    </div>
  )
}

export default Counter;  // we export the Counter so that other files can fetch and act on it