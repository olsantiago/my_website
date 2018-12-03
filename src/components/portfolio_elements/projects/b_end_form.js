import React, { Component } from 'react';
import {Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';
import './projects.css';
import 'react-mdl';

class B_end_form extends Component{
    render(){
        return(
                <div>
                <Card className='card' 
                        shadow={2}
                        style={{
                            width:'220px', 
                            height:'300px', 
                            borderRadius:'0.3em', 
                            margin:'auto', 
                            marginBottom:'10px', 
                            boxShadow: '0 0 8px 0px #ab9fd4',
                            }}>
                    <CardTitle className='card_title' expand style={{ color: 'white', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>React Form</CardTitle>
                        <CardText style={{width:'100%', color:'white', backgroundColor:'#ab9fd4'}}>
                            Email form using Axios, Nodemailer and Express
                        </CardText>
                    <CardActions border style={{backgroundColor:'#ab9fd4'}}>
                    <a href='https://github.com/olsantiago/-Express-Nodemailer-_Form/tree/master/React' target='_blank' rel='noopener noreferrer'><Button colored ripple style={{color:'white', backgroundColor:'black', borderRadius:'25px'}}>Check Out</Button></a>
                    </CardActions>
                </Card>
                </div>
        )
    }
}

export default B_end_form;