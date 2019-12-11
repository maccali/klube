
import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api'
import img from '../../Images/logo.png';

import { ModalError } from '../../components'

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
    email: "guimaccali@gmail.com",
    password: "12345",
    modal: false,
    errorMessage: '',
  };

  static navigationOptions = {
    title: 'Login',
  };

  handleLogin = async () => {
    const { email, password } = this.state;

    api.post('/sessions', {
      email, password
    })
      .then(async (response) => {

        await AsyncStorage.setItem('token', response.data.token);

        const { navigation } = this.props;
        navigation.navigate('Main');
      })
      .catch(error => {
        console.log('???????????????????????????????????????????????')
        console.log(error )

        this.showModal();

        // TODO limpar campos
        // if(error.response.status )
      });

  };

  handleRegister = async () => {
    const { navigation } = this.props;
    navigation.navigate('Signup');
  };

  showModal = () => {
    this.setState({
      modal: true,
      errorMessage: 'Usuário ou senha incorretos'
    });
  };

  closeModal = () => {
    this.setState({
      modal: false,
    });
  }

  render() {

    const { email, password, errorMessage } = this.state;

    const modal = <ModalError text={errorMessage} closeModal={this.closeModal.bind(this)} />

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
            value={password}
            onChangeText={textPass => this.setState({ password: textPass })}
          />
        </Box>

        {this.state.modal ? modal: null}

        <Button onPress={() => this.handleLogin()}>
          <ButtonText>
            Entrar
          </ButtonText>
        </Button>
        <Button onPress={() => this.handleRegister()}>
          <ButtonText>
            Cadastrar
          </ButtonText>
        </Button>


      </Container>
    );
  }
}
