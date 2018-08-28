import React from 'react';

const calculatorChild=({result,updateInput1,updateInput2,plus,minus,product,divide,remainder})=>{
    return  (
        <div>
        <input id="input1" onChange={event=>updateInput1(Number(event.target.value))}></input>
        {/*the values are default passed as string in INPUT so we convert it into number*/}
        <input id="input2" onChange={event=>updateInput2(Number(event.target.value))}></input>
        <div>
        <button onClick={()=>plus()}>+</button>
        <button onClick={()=>minus()}>-</button>
        <button onClick={()=>product()}>*</button>
        <button onClick={()=>divide()}>/</button>
        <button onClick={()=>remainder()}>%</button>
        </div>
        <div>Result:{result}</div>
        </div>    
    )
}

export default calculatorChild;