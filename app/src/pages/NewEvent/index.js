
import React, { Component } from 'react';
import { RNCamera } from 'react-native-camera';
import Geolocation from '@react-native-community/geolocation';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text } from 'react-native'

import {
  Container,
  Box,
  IconCont,
  FormInput,
  FormInputMultiline
} from './styles';

export default class NewEvent extends Component {

  static navigationOptions = {
    title: 'Novo Evento',
  };



  componentDidMount() {
    const { navigation } = this.props;
    const local = navigation.getParam('local');
    if (local) {
      // Get Geolocation
      let geoOptions = {
        enableHighAccuracy: true,
        timeOut: 20000,
        maximumAge: 60 * 60 * 24
      }

      Geolocation.setRNConfiguration(geoOptions);
      Geolocation.getCurrentPosition(info => console.log(info));
    } else {

    }
  }

  geoSuccess = (position) => {
    console.log(position)
  }

  geoFailure = (err) => {
    console.log(err)

  }

  state = {
    photo: '',
    eventName: '',
    localName: '',
    description: '',
    where: { lat: null, lng: null },
    error: null
  }

  render() {

    const { photo, eventName, localName, description } = this.state;

    return (
      <Container>
        <Text>Fotinho</Text>
        <Text>Nome Evento</Text>
        <Text>Nove do local</Text>
        <Text>Data do evento</Text>
        <Text>Descrição</Text>

        <Box>
          <IconCont>
            <Icon name="stars" size={30} color="#7159c1" />
          </IconCont>
          <FormInput
            placeholder="Nome do Evento"
            value={eventName}
            multiline={true}
            onChangeText={textEventName => this.setState({ eventName: textEventName })}
          />
        </Box>
        <Box>
          <IconCont>
            <Icon name="local-pizza" size={30} color="#7159c1" />
          </IconCont>
          <FormInput
            placeholder="Nome do local"
            value={localName}
            multiline={true}
            onChangeText={textLocalName => this.setState({ localName: textLocalName })}
          />
        </Box>
        <Box>
          <IconCont>
            <Icon name="view-headline" size={30} color="#7159c1" />
          </IconCont>
          <FormInputMultiline
            placeholder="Descreva o evento"
            value={description}
            multiline={true}
            onChangeText={textDescription => this.setState({ description: textDescription })}
          />
        </Box>


      </Container>
    );
  }
}
