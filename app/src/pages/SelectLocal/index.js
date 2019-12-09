import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Text } from 'react-native';

import {
  Container,
  Title,
  Button,
  ButtonText,
} from './styles';

export default class SelectLocal extends Component {
  state = {
    email: "",
    pass: ""
  };

  static navigationOptions = {
    title: 'Selecione o local',
  };

  handleNewEventLocal = async () => {
    const { navigation } = this.props;
    const local = true;
    navigation.navigate('NewEvent', { local });
  };

  handleNewEventOther = async () => {
    const { navigation } = this.props;
    const local = false;
    navigation.navigate('NewEvent', { local });
  };


  render() {

    const { props } = this.props
    const { email, pass } = this.state;

    return (
      <Container>
        <Title>Aonde o evento irá ocorrer?</Title>
        <Button onPress={() => this.handleNewEventLocal()}>
          <Icon name="location-searching" size={60} color="#7159c1" />
          <ButtonText>
            Neste Local
          </ButtonText>
        </Button>
        <Button onPress={() => this.handleNewEventOther()}>
          <Icon name="map" size={60} color="#7159c1" />
          <ButtonText>
            Em outro local
          </ButtonText>
        </Button>
      </Container>
    );
  }
}
