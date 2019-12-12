import React, { Component } from 'react';

import { Camera } from '../../components'

import {
  Container,
} from './styles';

export default class CameraPage extends Component {

  static navigationOptions = {
    title: 'Tire uma foto',
  };

  render() {

    return (
      <Container>
        <Camera />
      </Container >
    );
  }
}
