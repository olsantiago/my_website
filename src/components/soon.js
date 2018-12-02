import React, { Component } from 'react';
import './css/about.css';
import Message_Form from './message_form';

class Soon_page extends Component{
    render(){
        return(
            <div className='about-page'>

            <div className="row">
            <div className="column_left">
                <h1>Coming Soon</h1>
                <p>I am currently working on projects for this..</p>
            </div>
            <div className='column_middle'>  
            </div>
            <div className="column_right">
                <h1>Message Me!</h1>
                <Message_Form/>
            </div>
            </div>
                
            </div>
        )
    }
}

export default Soon_page;