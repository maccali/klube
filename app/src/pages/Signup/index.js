import React, { Component } from 'react';

import { Signup } from '../../components'

import {
  Container,
} from './styles';

export default class SignupPage extends Component {

  static navigationOptions = {
    title: 'Cadastre-se',
  };

  render() {
    return (
      <Container>
          <Signup props={this.props}/>
      </Container>
    );
  }
}
