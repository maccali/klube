
import React, { Component } from 'react';
import { RNCamera } from 'react-native-camera';
import Geolocation from '@react-native-community/geolocation';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text } from 'react-native'

import {
  Container,
} from './styles';

export default class NewEvent extends Component {

  static navigationOptions = {
    title: 'Novo Evento',
  };

  state = {
    where: {lat: null, lng: null},
    error: null
  }

  componentDidMount() {
    const { navigation } = this.props;
    const local = navigation.getParam('local');
    if (local) {

        let geoOptions = {
          enableHighAccuracy: true,
          timeOut: 20000,
          maximumAge: 60 * 60 * 24
        }

        // navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoFailure, geoOptions)

        Geolocation.setRNConfiguration(geoOptions);
        Geolocation.getCurrentPosition(info => console.log(info));

    } else {

    }
  }

  geoSuccess = (position) => {
      console.log(position)
    }

    geoFailure = (err) => {
      console.log(err)

  }

  render() {
    return (
      <RNCamera
        ref={camera => { this.camera = camera }}
        // style={styles.preview}
        type={RNCamera.Constants.Type.back}
        autoFocus={RNCamera.Constants.AutoFocus.on}
        flashMode={RNCamera.Constants.FlashMode.off}
        captureAudio={false}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={false}
      />
      // <Container>
      //   <Text>Novo evento</Text>
      // </Container>
    );
  }
}
