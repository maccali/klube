import React, { Component } from 'react';

import { RNCamera } from 'react-native-camera';

import {
  Container,
  View,
  TouchableOpacity,
  Text
} from './styles';


export default class CameraPage extends Component {

  render() {


    return (
      <Container>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          captureAudio={false}
          mute={true}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}

        />
        <View>
          {/* <TouchableOpacity onPress={this.takePicture.bind(this)} > */}
          <TouchableOpacity  >
            <Text> SNAP </Text>
          </TouchableOpacity>
        </View>
      </Container >
    );
  }
}
