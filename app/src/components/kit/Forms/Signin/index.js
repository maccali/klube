import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../../../services/api';

import { Text } from 'react-native';

import {
  Container,
  FormInput,
  FormLabel,
  SubmitForm,
  SubmitFormText,
} from './styles';

export default class Signin extends Component {
  state = {
    email: "",
    pass: ""
  };

  // static navigationOptions = {
  //   title: 'Entrar',
  // };

  render() {

    const { email, pass } = this.state;

    return (
      <Container>
        <FormLabel>EMAIL:</FormLabel>
        <FormInput
          value={email}
          onChangeText={textEmail => this.setState({ email: textEmail })}
        />
        <FormLabel>SENHA:</FormLabel>
        <FormInput
          value={pass}
          onChangeText={textPass => this.setState({ pass: textPass })}
        />
        <SubmitForm onPress={() => this.handleCheckin()}>
          <SubmitFormText> Entrar </SubmitFormText>
        </SubmitForm>
      </Container>
    );
  }
}
