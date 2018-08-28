import React from 'react';
import Home from './components/home';
import About from './components/aboutUs';
import Contact from './components/contactUs'
import Members from './components/members';
import Counter from './components/counter';
import Calculator from './components/calculator';
import LifeCycle from './components/lifeCycleMethods';
import NodeAPI from './components/nodeAPI'
import {Link,Route,BrowserRouter} from 'react-router-dom';
import Omdb from './components/omdb';


const eonicsLabs=()=>{
    return (
      <section>
      <p>this will always be there</p>
      <BrowserRouter>
        <div>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/counter">Counter</Link></li>
          <li><Link to="/calculator">Calculator</Link></li>
          <li><Link to="/life_cycle">Life Cycle Methods</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/members">Members</Link></li>
          <li><Link to="/contact_us">Contact Us</Link></li>
          <li><Link to="/movie_details">Movie details</Link></li>                   
          {/*<li><Link to="/node_API">Node API</Link></li>*/}                   
        </ul>

          <Route exact path="/" component={Home} />
          {/*<Route path="/" component={Home} />*/}
          <Route path="/counter" component={Counter} />
          <Route path="/calculator" component={Calculator} />
          <Route path="/life_cycle" component={()=><LifeCycle name="Singh" age="26"/>}/>
          {/*passed props in router component*/}
          <Route path="/about" component={About}/>
          <Route path="/members" component={Members}/>
          <Route path="/contact_us" component={Contact}/>
          <Route path="/movie_details" component={Omdb} />
          {/*<Route path="/node_API" component={NodeAPI} />*/}
        </div>
        </BrowserRouter>
        </section>
    )
  }


export default eonicsLabs;
