import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../../../services/api';

import img from './img/logo.png';


import {
  Container,
  FormInput,
  Button,
  ButtonText,
  Logo,
  Box,
  IconCont,
} from './styles';

export default class Signin extends Component {
  state = {
    email: "",
    pass: "",
    passRepeat: "",
  };

  handleLogin = async () => {
    const { navigation } = this.props;
    navigation.navigate('Main');
  };

  handleRegister = async (props) => {
    const { navigation } = props;
    navigation.navigate('Signup');
  };

  render() {

    const { props } = this.props
    const { email, pass, passRepeat } = this.state;

    return (
      <Container>
        <Logo source={img} />

        <Box>
          <IconCont>
            <Icon name="email" size={30} color="#7159c1" />
          </IconCont>
          <FormInput
            placeholder="Email"
            value={email}
            onChangeText={textEmail => this.setState({ email: textEmail })}
          />
        </Box>
        <Box>
          <IconCont>
            <Icon name="vpn-key" size={30} color="#7159c1" />
          </IconCont>
          <FormInput
            placeholder="Senha"
            secureTextEntry={true}
            value={pass}
            onChangeText={textPass => this.setState({ pass: textPass })}
          />
        </Box>
        <Box>
          <IconCont>
            <Icon name="vpn-key" size={30} color="#7159c1" />
          </IconCont>
          <FormInput
            placeholder="Repita a senha"
            secureTextEntry={true}
            value={passRepeat}
            onChangeText={textPassRepeat => this.setState({ passRepeat: textPassRepeat })}
          />
        </Box>

        <Button onPress={() => this.handleLogin(props)}>
          <ButtonText>
            Cadastrar
          </ButtonText>
        </Button>
      </Container>
    );
  }
}
