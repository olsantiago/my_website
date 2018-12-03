import React, { Component } from 'react';
import './css/message_form.css';
import Dialog_Box from './dialog';
import $ from 'jquery';

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
            */ } {/* Remove comment tags and console.log function if backend is available */}  
        }

        componentDidMount = () => {

            {/*You can delete/edit this validation this is just a simple front end validation*/}
                var letters = /^[A-Za-z ]+$/;
                var form = $('#name, #email, #message');
                var email = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                $('.FormField_Button').click(function(){
                    alert('Message Sent!')
                })
            
                form.keyup(function(){
                    if(!$('#name').val().match(letters)){
                        $('#name-error').html("Name must contain letters only*");
                    }
                    if($('#name').val()=="" || $('#name').val().match(letters)){
                        $('#name-error').html("");
                    }
                    if(!$('#email').val().match(email)){
                        $('#email-error').html("Invalid Email Address*");
                    }
                    if($('#email').val()=="" || $('#email').val().match(email)){
                        $('#email-error').html("");
                    }
                })
            {/*You can delete/edit this validation this is just a simple front end validation */}
    
        }; 

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
                    <br/>
                <span id="name-error"></span>
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
                    <br/>
                <span id="email-error"></span>
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