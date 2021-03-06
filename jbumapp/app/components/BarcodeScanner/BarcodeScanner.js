'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Alert
} from 'react-native';
import Meteor, { Accounts } from 'react-native-meteor';
import Camera from 'react-native-camera';
import { Button } from 'react-native-elements'
import _ from 'lodash';

class BarcodeScanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggingIn: false,
      loginData:null,
      barcodeData:null
    }
    /*
      Setup your onBarCodeRead throttle here
      Choose your throttle time in ms - 500 etc.
    */
    this.onBarCodeRead = _.throttle(this.onBarCodeRead, 50000);


  }
  componentDidMount() {


  }

  handleCreateAccount = () => {
    const { barcodeData } = this.state;
    if (barcodeData !== null && !Meteor.userId()) {
      Meteor.call('createUserAccount', barcodeData, (err, response) => {
        if (err) {
          console.log("err: "+err.details);
          Alert.alert(
            'Oops! Screenshot this and send to support!',
            'Server error: \n\n'+err.details
          );
          return;
        } else {
          console.log(response.username);
          this.state.loginData = response;
          this.handleLogin();
        }
      });
    }
  }
  handleLogin = () => {
    if(this.state.loginData !== null && !Meteor.userId()){
      const { loginData } = this.state;
      console.log(loginData);
      Meteor.loginWithPassword(loginData.username, loginData.password, (err) => {
        if (err) {
          Alert.alert(
            'Oops! Screenshot this and send to support!',
            'Server error: \n\n'+err.details
          );
        }
        this.props.navigation.navigate('AccountSetup', { loginData: loginData })
      });
    }
  }

  handleButtonPress = () => {
    alert("This has been emailed to you if you are in the closed beta. If you havent recieved one please contact phoebe@daywaneti.com");
  }

  render() {
    var handleButtonPressOnce = _.once(this.onBarCodeRead.bind(this));
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          onBarCodeRead={handleButtonPressOnce}
          aspect={Camera.constants.Aspect.fill}>
          <Button
            testID="somethingelse"
            iconRight
            icon={{name: 'crop-free'}}
            onPress={() => this.handleButtonPress()}
            title='Please Scan Barcode' />
        </Camera>
      </View>
    );
  }

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }

  onBarCodeRead = (data) => {
    if (data.data !== null){
      this.state.barcodeData = data.data;
      this.handleCreateAccount()
    }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: 'transparent',
    borderRadius: 10,
    color: '#e91e63',
    padding: 10,
    margin: 40
  }
});

export default BarcodeScanner;
