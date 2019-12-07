
import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text } from 'react-native'

import {
  Container,
} from './styles';

export default class NewEvent extends Component {

  static navigationOptions = {
    title: 'Novo Evento',
  };

  componentDidMount() {
    const { navigation } = this.props.children;
    const local = navigation.getParam('local');

  }

  render() {

    const { props } = this.props

    return (
      <Container>
        <Text>Novo evento</Text>
      </Container>
    );
  }
}
