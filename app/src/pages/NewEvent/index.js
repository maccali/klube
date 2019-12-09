
import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text } from 'react-native'


import {Dimensions } from "react-native";

import {
  Container,
} from './styles';

export default class NewEvent extends Component {

  static navigationOptions = {
    title: 'Novo Evento',
  };

  componentDidMount() {
    const { navigation } = this.props;
    const local = navigation.getParam('local');
    console.log(local);
  }

  render() {
    return (
      <Container>
        <Text>Novo evento</Text>
      </Container>
    );
  }
}
