import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../../../services/api';


import img from './img/logo.png';

import {
  Container,
  FormInput,
  SubmitForm,
  Logo,
  Box,
  IconCont,
} from './styles';

export default class Signin extends Component {
  state = {
    email: "",
    pass: ""
  };

  render() {

    const { email, pass } = this.state;

    return (
      <Container>
        <Logo source={img} />

        <Box>
          <IconCont>
            <Icon name="email" size={30} color="#aca6aa" />
          </IconCont>
          <FormInput
            value={email}
            onChangeText={textEmail => this.setState({ email: textEmail })}
          />
        </Box>
        <Box>
          <IconCont>
            <Icon name="vpn-key" size={30} color="#aca6aa" />
          </IconCont>
          <FormInput
            value={pass}
            onChangeText={textPass => this.setState({ pass: textPass })}
          />
        </Box>
        <SubmitForm onPress={() => this.handleCheckin()}>
          <Icon name="keyboard-arrow-right" size={60} color="#aca6aaff" />
        </SubmitForm>
      </Container>
    );
  }
}
