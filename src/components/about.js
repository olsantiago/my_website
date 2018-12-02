import React, { Component } from 'react';
import './css/about.css';
import Message_Form from './message_form';

class About extends Component{
    render(){
        return(
            <div className='about-page'>

            <div className="row">
            <div className="column_left">
                <h1>About</h1>
                <p>Simply to say that I love programming, whether it is front-end or back-end. It started as a side task at one of my previous job, and then it hit me as something that I really want to do. I love doing minimalistic front-end side with excellent UI/UX, yet again I make sure that I understand how back-end works to be able to work with a site/app's functionality.</p>
                <p>I still do vanilla js, even with all the frameworks around to practice good fundamentals. For this website, I used Reactjs as my framework, I am also familiar with AngularJS and VueJS and soon be putting up repositories on my accounts</p>
                <p>I believe that programming is not about what you learn in school, or memorizing codes and how to use them, programming is more about solving problems and to be able to think of optimal functions/solutions to create a product.</p>
                <p>If you would like to know more about me, feel free to send me a message!</p>
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

export default About;