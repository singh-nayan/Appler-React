import React ,{Component} from 'react';    // Calling Component class from React file from react library  
import CounterChild from './counter'; 

class counter extends Component{      // class based component extending Component class 
    constructor(){                  // construcor is defined for our app class
        super();                    // calling the constructor from super class Components 
                                        //to achieve some functionality here
        this.state={count:0};       // set the state of our application and termed as count   
    }
 
    render(){                   // render function is very important as it will render and update our 
                                //component every time there is a change in state
        return(
            <div>
            <CounterChild                                // an instance of Counter component is created 
            Count={this.state.count}                // passing our state count as prop
            increment={(count)=>this.setState({count:++count})}  
            // passing a call back function as a prop which will change the state using setState function
            decrement={(count)=>this.setState({count:--count})}  // --------do-----------
            />
            </div>
        )
    }
}

export default counter;