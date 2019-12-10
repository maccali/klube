
import React, { Component } from 'react';
import { RNCamera } from 'react-native-camera';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text } from 'react-native'

import {
  Container,
} from './styles';

export default class NewEvent extends Component {

  // static navigationOptions = {
  //   title: 'Novo Evento',
  // };

  componentDidMount() {
    const { navigation } = this.props;
    const local = navigation.getParam('local');
    if (local) {

    } else {

    }
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
