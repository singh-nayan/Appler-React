import React, { Component } from 'react';

class lifeCycle extends Component {

  constructor(props){         
  // 1st method to be called, before the component is mounted on DOM, called only when 
  // instance of component is created, more instance created more number of times the constructor will 
  // be called
    super(props);
    console.log("constructor");
    this.state={
      count:0
    }
  }

  componentDidMount(){      
  // Last method to be called after component mounted on DOM, called only once in a lifetime
      console.log("didMount");
  }

  componentWillMount(){       
  // second method to be called, before the component is mounted on DOM, called only once in a lifetime
    console.log("willMount");
  }

  render() {                
  // 3rd method to be called, after the comonent mounted on DOM, 
  //and is also called every time there is an update in component 

    let {name,age}=this.props;       // props are extracted as variables in render function
              // only the function extracting the props can access them other functions
    console.log("render");
    return (
      <div>
        <button onClick={()=>this.setState({count:++this.state.count})}>
          {this.state.count}
        </button><br/>
        {name} , {age}
       </div>
    );
  }

}

lifeCycle.defaultProps={
  name:"nayan",
  age:25
}

export default lifeCycle;
