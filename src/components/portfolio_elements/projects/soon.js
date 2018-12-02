import React, { Component } from 'react';
import {Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';
import './projects.css';

class Soon extends Component{
    render(){
        return(
                <div>
                <Card className='card' shadow={0} style={{width: '220px', height: '300px', margin:'auto', borderRadius:'0.5em', boxShadow: '0 0 8px 0px #ab9fd4'}}>
                    <CardTitle className='card_title' expand style={{ color: 'black', backgroundColor:'black', background: 'url(https://cdn.worldvectorlogo.com/logos/angular-icon.svg) center / cover'}}>Coming Soon</CardTitle>
                        <CardText style={{width:'100%', height:'70px', color:'white', backgroundColor:'#ab9fd4'}}>
                            Project on progress....
                        </CardText>
                    <CardActions border style={{backgroundColor:'#ab9fd4'}}>
                         <Button colored ripple style={{color:'white', backgroundColor:'black', borderRadius:'25px'}}>Check Out</Button>
                    </CardActions>
                </Card>
                </div>
        )
    }
}

export default Soon;