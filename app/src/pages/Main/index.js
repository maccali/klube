import React, { Component } from 'react';

import { Container } from './styles';

import { Events, Signin } from '../../components/index'

export default class Main extends Component {


  static navigationOptions = {
    title: 'Eventos',
  };

  render() {
    return (
      <Container>
        <Signin />
      </Container>
    );
  }
}
