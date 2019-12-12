import React, { Component } from 'react';

import { RNCamera } from 'react-native-camera';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import {
  CameraContainer
} from './styles'

export default class Camera extends Component {

  static navigationOptions = {
    title: 'Tire uma foto',
  };

  async componentDidMount() {
    const event = JSON.parse(await AsyncStorage.getItem('newEvent'));
    console.log(event)
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options)
      alert(data.uri);
    }

    const event = JSON.parse(await AsyncStorage.getItem('newEvent'));
    console.log(event)
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
        <View>
          <TouchableOpacity onPress={this.takePicture} >
            <Text > SNAP </Text>
          </TouchableOpacity>
        </View>
      </CameraContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


