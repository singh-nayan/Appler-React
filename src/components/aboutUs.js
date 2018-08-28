import React from 'react';
import Testing from './testing';
import Development from './development';
import {Link,Route,BrowserRouter} from 'react-router-dom';

const aboutUs=()=>{
    return(
        <div>
            <h2>Established in 2017</h2>

            <h4>We do testing and development</h4>
            <BrowserRouter>
                <div>
                    <ul>
                        <li><Link to="/about/testing">Testing</Link></li>
                        <li><Link to="/about/development">Development</Link></li>
                    </ul>
                    <Route path="/about/testing" component={Testing} /> 
                    <Route path="/about/development" component={Development} /> 
                </div>
            </BrowserRouter>
        </div>
    )
}

export default aboutUs;