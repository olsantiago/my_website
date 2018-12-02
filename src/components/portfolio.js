import React, { Component } from 'react';
import Meetch from './portfolio_elements/projects/meetch';
import Soon from './portfolio_elements/projects/soon';
import './css/portfolio.css';
import $ from 'jquery';




class Portfolio extends Component{
    render(){

        return(

            
            <div className='portfolio-page'>

            <div className="row">
            <div className="column_left">
                <h1>Projects</h1>
                <div className='portfolio-elem'>
                    <Meetch/>
                    <Soon/>
                </div>
            </div>
            <div id='repo_column' className="portfolio_column_right">
                <h1>Working on it!</h1>
                <p>I will be putting components and back-end repositories here.</p>
            </div>
            </div>
                
            </div>
        )
    }
}

export default Portfolio;