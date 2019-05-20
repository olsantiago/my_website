import React, { Component } from 'react';
import Meetch from './portfolio_elements/projects/meetch';
import Soon from './portfolio_elements/projects/soon';
import './css/portfolio.css';
import $ from 'jquery';
import B_end_form from './portfolio_elements/projects/b_end_form';




class Portfolio extends Component{
    render(){

        return(

            
            <div className='portfolio-page'>

            <div className="row">
            <div className="column_left">
                <h1>Projects</h1>
                <div className='portfolio-elem'>
                    <Meetch/>
                    <B_end_form/>
                    <Soon/>
                </div>
            </div>
            <div id='repo_column' className="portfolio_column_right">
                <h1>Working on it!</h1>
                <p>I mostly do front-end development, so my projects would be focusing on components and UI/UX elements</p>
                <p>However, it is still fun to do some back-end work from time to time. I will be posting some links here for you to check out!</p>
            </div>
            </div>
                
            </div>
        )
    }
}

export default Portfolio;