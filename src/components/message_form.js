import React, { Component } from 'react';
import './css/message_form.css';
import Dialog_Box from './dialog';

{/*
import axios from 'axios';
import $ from 'jquery'; 
*/}

{/* Remove comment tags if backend is available */}

class Message_Form extends Component {

    constructor(){
        super()
        this.state = {
            name:'',
            email:'',
            message:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

        handleChange = e =>{
            this.setState({[e.target.name]: e.target.value})
        }

        async handleSubmit(e) {
            e.preventDefault()
            
            console.log(this.state)
            {/*
                const { name, email, message} = this.state
                const form = await axios.post('/api/form', {
                name,
                email,
                message
            })
            */ }

            {/* Remove comment tags and console.log function if backend is available */}
            
        }

    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields" id='my_form'>
            <div className="FormField">
                <label className="FormField_Label" htmlFor="name">Name</label>
                <input 
                    type="name" 
                    id="name" 
                    className="FormField_Input" 
                    placeholder="Enter your name"
                    onChange={this.handleChange} 
                    name="name" />
              </div>

            <div className="FormField">
                <label className="FormField_Label" htmlFor="email">E-Mail Address</label>
                <input 
                    type="email" 
                    id="email" 
                    className="FormField_Input" 
                    placeholder="Enter your email"
                    onChange={this.handleChange}  
                    name="email" />
              </div>

            <div className="FormField">
                <label className="FormField_Label" htmlFor="email">Message</label>
                <input 
                    type="textarea" 
                    id="message" 
                    className="FormField_Input" 
                    placeholder="Your Message Here"
                    onChange={this.handleChange}  
                    name="message" />
            </div>    

              <div className="FormField">
              <Dialog_Box></Dialog_Box>
              </div>
            </form>
          </div>
        );
    }
}

export default Message_Form;