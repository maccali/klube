import React, { Component } from 'react';
import { RNCamera } from 'react-native-camera';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';

import {
  CameraContainer,
  SnapView,
  SnapTouchableOpacity,
  SnapText,
} from './styles'

export default class Camera extends Component {

  async componentDidMount() {
    const event = JSON.parse(await AsyncStorage.getItem('newEvent'));
    console.log(event)
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options)

      const event = JSON.parse(await AsyncStorage.getItem('newEvent'));
      event.photo = data.uri
      event.newPhoto = true
      AsyncStorage.setItem('newEvent', JSON.stringify(event));
      const eventPatho = JSON.parse(await AsyncStorage.getItem('newEvent'));

      console.log('Incerido a imagem no evento')
      console.log(eventPatho)

    }

  }

  render() {

    return (
      <CameraContainer>
        <RNCamera
          ref={camera => { this.camera = camera }}
          style={styles.container}
          type={RNCamera.Constants.Type.back}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          flashMode={RNCamera.Constants.FlashMode.off}
          captureAudio={false}
        />
        <SnapView>
          <SnapTouchableOpacity onPress={this.takePicture} >
            <Icon name="camera" size={50} color="#7159c1" />

          </SnapTouchableOpacity>
        </SnapView>
      </CameraContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


