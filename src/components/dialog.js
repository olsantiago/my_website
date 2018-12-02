import React, { Component } from 'react';
import {Dialog, DialogContent, DialogTitle, DialogActions, Button} from 'react-mdl';


class Dialog_Box extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.handleOpenDialog = this.handleOpenDialog.bind(this);
      this.handleCloseDialog = this.handleCloseDialog.bind(this);
    }
  
    handleOpenDialog() {
      this.setState({
        openDialog: true
      });

      document.getElementById("my_form").reset();
    }
  
    handleCloseDialog() {
      this.setState({
        openDialog: false
      });
    }
  
    render() {
      return (
        <div>
          <Button onClick={this.handleOpenDialog} 
                  colored
                  raised 
                  ripple
                  style={{backgroundColor:'#ab9fd4', 
                          borderRadius:'2em'}}
                  >Send Message</Button>
          <Dialog open={this.state.openDialog}  >
            <DialogTitle>Sent</DialogTitle>
            <DialogContent>
              <p style={{color:'grey'}}>Github does not provide back-end support, here is the full <a href='https://github.com/olsantiago/-Express-Nodemailer-_Form/tree/master/React' target='_blank'>repository</a>. <br/>Otherwise, email me @ oliveratwork08@gmail.com.</p>
              <p style={{color:'grey'}}>Also, check log<br/> Thank You!</p>
            </DialogContent>
            <DialogActions>
              <Button type='button' onClick={this.handleCloseDialog}>Close</Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
  }

  export default Dialog_Box;