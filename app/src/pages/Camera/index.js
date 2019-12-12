import React, { Component } from 'react';

import { Camera } from '../../components'

import {
  Container,
} from './styles';

export default class CameraPage extends Component {

  render() {

    return (
      <Container>
        <Camera />
      </Container >
    );
  }
}
