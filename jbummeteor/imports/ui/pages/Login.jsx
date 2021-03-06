import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router'
import { Meteor } from 'meteor/meteor';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const style = {
  height: 350,
  width: 320,
  marginTop: '10%',
  textAlign: 'center',
  display: 'inline-block',
  borderRadius: 5
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      error: ''
    };
    this.state = this.getMeteorData();
    this.loginUser = this.loginUser.bind(this);
  }
  componentWillMount(){
    if (this.state.isAuthenticated) {
      this.props.history.push('/');
    }
  }

  getMeteorData(){
    return { isAuthenticated: Meteor.userId() !== null };
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  loginUser = (event) => {
    event.preventDefault();
    let username = this.refs.username.value.trim();
    let password = this.refs.password.value.trim();
    console.log(this.props.history);

    let shouldLogIn = Meteor.call('canLoginToAdminPanel', username, (err, isAllowed) => {
      if (err) {
        console.log('unsuccessful login');
        this.handleTouchTap();
        this.refs.username.value = '';
        this.refs.password.value = '';
        this.setState({
          error: err.reason
        });
        return;
      } else {
        if (isAllowed) {
          Meteor.loginWithPassword(username, password, (err) => {
           if(err){
             console.log('unsuccessful login');
             this.handleTouchTap();
             this.refs.username.value = '';
             this.refs.password.value = '';
             this.setState({
               error: err.reason
             });
           }
           else {
             this.doTheThing();
           }
         });
        }
        else {
          console.log('unsuccessful login');
          this.handleTouchTap();
          this.refs.username.value = '';
          this.refs.password.value = '';
          this.setState({
            error: 'Account not authorized'
          });

        }

      }
    });
    console.log(shouldLogIn);

    //Roles.userIsInRole(Meteor.userId(), ['responder', 'admin'], 'default-group')
    if (shouldLogIn) {

    }

     //console.log(username + ' ' + password);
  }

  doTheThing = () => this.props.history.push('/responder');


  render() {
    const { error } = this.state;

    return(
      <form onSubmit={ this.loginUser}>
        <MuiThemeProvider>
          <div >
            <center>
              <Paper zDepth={2} style={style}>
                <h4 style={{marginTop: 55, marginBottom: 50, color: '#919799'}}>JBUM Admin</h4>
                <input type="text" placeholder="Username" ref='username' style={{width: '80%', marginBottom: 25}} />
                <input type="password" placeholder="Password" ref='password' style={{width: '80%'}} />
                <RaisedButton label="Login" primary={true} type='submit' style={{width: '80%', marginTop: 10}}/>
              </Paper>
            </center>
            <Snackbar
              open={this.state.open?this.state.open:false}
              message={error?error:''}
              autoHideDuration={4000}
              onRequestClose={this.handleRequestClose}
            />
          </div>
        </MuiThemeProvider>
      </form>);
    }
}
export default Login;
