
import React, { Component } from 'react';
import Geolocation from '@react-native-community/geolocation';
import DateTimePicker from '@react-native-community/datetimepicker';
import Data from '../../helpers/Date';
import AsyncStorage from '@react-native-community/async-storage';



import Icon from 'react-native-vector-icons/MaterialIcons';
import { Camera } from '../../components'

import {
  Container,
  Box,
  IconCont,
  FormInput,
  FormInputMultiline,
  BoxPicker,
  ButtonPhoto,
  ButtonText,
  Button,
  ButtonPhotoText
} from './styles';

import { Platform } from 'react-native';


export default class NewEvent extends Component {

  state = {
    photo: '',
    eventName: '',
    localName: '',
    description: '',
    dateField: '',
    timeField: '',

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

  async componentWillUnmount(){
    // console.log(this.state);
    // console.log(JSON.stringify(this.state));
    await AsyncStorage.setItem('newEvent', JSON.stringify(this.state))
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
      dateField: Data.formatDateEventForm(date),
      timeField: Data.formatTimeEventForm(date),
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

  cameraCall = () => {
    const { navigation } = this.props;
    navigation.navigate('Camera');
  }

  saveEvent = () => {

  }

  render() {

    const { photo, eventName, localName, description, show, date, mode, dateField, timeField} = this.state;

    return (
      <Container>

        <ButtonPhoto onPress={() => this.cameraCall()}>
          <Icon name="camera" size={60} color="#7159c1" />
          <ButtonPhotoText>Tirar Foto</ButtonPhotoText>
        </ButtonPhoto>

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

        <BoxPicker onPress={this.datepicker}>
          <IconCont>
            <Icon name="event" size={30} color="#7159c1" />
          </IconCont>
          <FormInputMultiline
            placeholder="Data do evento"
            value={dateField}
            multiline={true}
            editable={false}
            onChangeText={textDateField => this.setState({ dateField: textDateField })}
          />
        </BoxPicker>

        <BoxPicker onPress={this.timepicker}>
          <IconCont>
            <Icon name="access-time" size={30} color="#7159c1" />
          </IconCont>
          <FormInputMultiline
            placeholder="Hora do evento"
            value={timeField}
            multiline={true}
            editable={false}
            onChangeText={textTimeField => this.setState({ timeField: textTimeField })}
          />
        </BoxPicker>

        <Button onPress={() => this.saveEvent()}>
          <ButtonText>Salvar Evento</ButtonText>
        </Button>

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
