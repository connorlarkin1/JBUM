import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor'
import { withHistory } from 'react-router-dom';
import MainContainer from './MainContainer.jsx';

export default class AppContainer extends Component {
  constructor(props){
    super(props);
    this.state = this.getMeteorData();
    this.logout = this.logout.bind(this);
  }

  getMeteorData(){
    return { isAuthenticated: Meteor.userId() !== null };
  }

  componentWillMount(){
    const name = this.props.history.location.pathname;
    if (this.props.history.location.pathname.indexOf('beta')){
      this.props.history.push('/beta', { origRoute: name });
    }
    else if (!this.state.isAuthenticated) {
      this.props.history.push('/login');
    }
  }

  logout(e){
    e.preventDefault();
    Meteor.logout( (err) => {
        if (err) {
            console.log( err.reason );
        } else {
            window.location.reload();
        }
    });
  }

  render(){
    return (
      <div>
        <MainContainer 
          pathname={this.props.location.pathname}
          push={this.props.history.push.bind(this)}
        />
      </div>
    );
  }
}
