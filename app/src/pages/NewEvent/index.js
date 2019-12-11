
import React, { Component } from 'react';
import { RNCamera } from 'react-native-camera';
import Geolocation from '@react-native-community/geolocation';
import DateTimePicker from '@react-native-community/datetimepicker';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text } from 'react-native'

import {
  Container,
  Box,
  IconCont,
  FormInput,
  FormInputMultiline,
  BoxPicker,
  ButtonPicker,
  ButtonText
} from './styles';

import { View, Button, Platform } from 'react-native';


export default class NewEvent extends Component {

  state = {
    photo: '',
    eventName: '',
    localName: '',
    description: '',
    where: { lat: null, lng: null },
    error: null,
    date: new Date('2020-06-12T14:42:42'),
    mode: 'date',
    show: false,
  }

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

  setDate = (event, date) => {
    date = date || this.state.date;

    this.setState({
      show: Platform.OS === 'ios' ? true : false,
      date,
    });
  }

  show = mode => {
    this.setState({
      show: true,
      mode,
    });
  }

  datepicker = () => {
    this.show('date');
  }

  timepicker = () => {
    this.show('time');
  }


  render() {

    const { photo, eventName, localName, description, show, date, mode } = this.state;

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


        {/* <BoxPicker>
          <ButtonPicker onPress={this.datepicker}>
            <Icon name="event" size={30} color="#7159c1" />
          </ButtonPicker>

          <ButtonPicker onPress={this.timepicker}>
            <Icon name="access-time" size={30} color="#7159c1" />
          </ButtonPicker>
        </BoxPicker> */}

        <BoxPicker onPress={this.datepicker}>
          <IconCont>
            <Icon name="event" size={30} color="#7159c1" />
          </IconCont>
          <FormInputMultiline
            placeholder="Data do evento"
            value={description}
            multiline={true}
            editable={false}
            onChangeText={textDescription => this.setState({ description: textDescription })}
          />
        </BoxPicker>

        <BoxPicker onPress={this.timepicker}>
          <IconCont>
            <Icon name="access-time" size={30} color="#7159c1" />
          </IconCont>
          <FormInputMultiline
            placeholder="Hora do evento"
            value={description}
            multiline={true}
            editable={false}
            onChangeText={textDescription => this.setState({ description: textDescription })}
          />
        </BoxPicker>

        {show && <DateTimePicker value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={this.setDate} />
        }

      </Container>
    );
  }
}
