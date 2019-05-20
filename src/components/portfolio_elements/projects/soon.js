import React, { Component } from 'react';
import {Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';
import './projects.css';

class Soon extends Component{
    render(){
        return(
                <div>
                <Card className='card' shadow={0} style={{width: '220px', height: '300px', margin:'auto', borderRadius:'0.3em', boxShadow: '0 0 8px 0px #ab9fd4'}}>
                    <CardTitle className='card_title' expand style={{ color: 'black', backgroundColor:'black', background: 'url(https://cdn.worldvectorlogo.com/logos/angular-icon.svg) center / cover'}}>Dopweb Builder</CardTitle>
                        <CardText style={{width:'100%', height:'70px', color:'white', backgroundColor:'#ab9fd4'}}>
                            Simplest yet poweful Website Builder
                        </CardText>
                    <CardActions border style={{backgroundColor:'#ab9fd4'}}>
                    <a href='https://builder.dopweb.com/' target='_blank' rel='noopener noreferrer'><Button colored ripple style={{color:'white', backgroundColor:'black', borderRadius:'25px'}}>Check Out</Button></a>
                    </CardActions>
                </Card>
                </div>
        )
    }
}

export default Soon;