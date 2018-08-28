import React, {Component} from 'react';
import CalculatorChild from './calculator';

class calculator extends Component{
    constructor(){
        super();
        this.state={
            num1:0,
            num2:0,
            result:''
        }
    }
    render(){
        return(
            <div>
            <CalculatorChild 
            result={this.state.result}
            updateInput1={num1=>this.setState({num1:num1})}
            updateInput2={num2=>this.setState({num2:num2})}
            plus={()=>this.setState({result:this.state.num1+this.state.num2})}
            minus={()=>this.setState({result:this.state.num1-this.state.num2})}
            product={()=>this.setState({result:this.state.num1*this.state.num2})}
            divide={()=>this.setState({result:this.state.num1/this.state.num2})}
            remainder={()=>this.setState({result:this.state.num1%this.state.num2})}
            />
            </div>
        )
    }
}

export default calculator;