import React, { Component } from 'react';
import { Keyboard, ActivityIndicator } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import { Text } from 'react-native';

import {
  Container,
  List,
  Event,
} from './styles';

export default class Main extends Component {
  state = {
    events: [
      {name: "dasaa"},
      {name: "dasadasdassa"}
    ]
  };

  async componentDidMount() {

  }

  componentDidUpdate(_, prevState) {

  }

  handleAddUser = async () => {

  };

  handleNavigate = user => {

  };

  static navigationOptions = {
    title: 'Eventos',
  };

  render() {
    const { events } = this.state;

    return (
      <Container>
        <Text>fdsfsQQ</Text>
        <List
          data={events}
          keyExtractor={event => event.name}
          renderItem={({ item }) => (
            <Event>
              <Text>{item.name}</Text>
            </Event>
          )}
        />
      </Container>
    );
  }
}
