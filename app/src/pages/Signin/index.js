// import React, { Component } from 'react';

// import { Container } from './styles';

// import { Events, Signin } from '../../components/index'

// export default class SigninPage extends Component {


//   static navigationOptions = {
//     title: 'Login',
//   };

//   // componentDidMount(){
//   //   const { navigation } = this.props;
//   //   navigation.navigate('Signup');
//   // }

//   render() {
//     return (
//       <Container>
//         <Signin props={this.props} />
//       </Container>
//     );
//   }
// }


import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';


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
    pass: ""
  };

  static navigationOptions = {
    title: 'Login',
  };

  handleLogin = async () => {
    const { navigation } = this.props;
    navigation.navigate('Main');
  };

  handleRegister = async () => {
    const { navigation } = this.props;
    navigation.navigate('Signup');
  };

  render() {

    const { email, pass } = this.state;

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
