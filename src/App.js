import React, { Component } from 'react';
import './App.css';
import Main from './components/main'
import Navbar from './components/navbar';
import {Link} from 'react-router-dom';


class App extends Component {
  render() {
    return (
    <div className='App'>
        <div className="topnav">
            <Navbar/>
        </div>
    <div className='body-part'>
      <Main/>
    </div>

    <div className='home'>
      <Link to='/'><i className='fa fa-home' aria-hidden='true'/></Link>
    </div>
       
    </div>

    );
  }
}



export default App;
