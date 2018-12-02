import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import './css/landing.css';
import {Link} from 'react-router-dom';

class Landing extends Component{
    render(){
        return(
        <div style={{width: '100%', margin:'auto'}}>
            <Grid className='landing_grid'>
                <Cell col={12}>
                <div className='banner'>
                    <h1>OLIVER SANTIAGO</h1>
                    <hr/>
                    <div className='bottom'>
                    <p className='tagline'>Web Developer | Javascript | React | NodeJS | UI/UX Dev</p>
                    <div className='social_links'>
                    
                    {/*Linkedin */}
                    <a href='https://www.linkedin.com/in/oliver-santiago-699474119/' target='_blank' rel='noopener noreferrer'>
                        <i className='fa fa-linkedin-square' aria-hidden='true'/>
                    </a>

                    {/*Github */}
                    <a href='https://github.com/olsantiago' target='_blank' rel='noopener noreferrer'>
                        <i className='fa fa-github-square' aria-hidden='true'/>
                    </a>
                    {/*Youtube */}
                     <Link to='/soon'>
                        <i className='fa fa-youtube' aria-hidden='true'/>
                    </Link>

                    {/*Stack Overflow */}
                    <Link to='/soon'>
                        <i className='fa fa-stack-overflow' aria-hidden='true'/>
                    </Link>    

                    </div>
                    </div>
                </div>
                
                </Cell>
            </Grid>
        </div>
        )
    }
}

export default Landing;