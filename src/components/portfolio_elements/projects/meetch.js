import React, { Component } from 'react';
import {Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';
import './projects.css';
import 'react-mdl';

class Meetch extends Component{
    render(){
        return(
                <div>
                <Card className='card' 
                        shadow={2}
                        style={{
                            width:'220px', 
                            height:'300px', 
                            borderRadius:'0.5em', 
                            margin:'auto', 
                            marginBottom:'10px', 
                            boxShadow: '0 0 8px 0px #ab9fd4',
                            }}>
                    <CardTitle className='card_title' expand style={{ color: 'black', background: 'url(http://travelwithmeetch.com/images/Travel-with-meetch.png) center / cover'}}>TravelwithMeetch</CardTitle>
                        <CardText style={{width:'100%', color:'white', backgroundColor:'#ab9fd4'}}>
                            A travel blog website made with Vanilla Javascript
                        </CardText>
                    <CardActions border style={{backgroundColor:'#ab9fd4'}}>
                    <a href='http://travelwithmeetch.com' target='_blank' rel='noopener noreferrer'><Button colored ripple style={{color:'white', backgroundColor:'black', borderRadius:'25px'}}>Check Out</Button></a>
                    </CardActions>
                </Card>
                </div>
        )
    }
}

export default Meetch;