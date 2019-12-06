import React, { Component } from 'react';

import { NewEvent } from '../../components'

import {
  Container,
} from './styles';

export default class SignupPage extends Component {

  static navigationOptions = {
    title: 'Novo Evento',
  };

  render() {
    return (
      <Container>
          <NewEvent props={this.props}/>
      </Container>
    );
  }
}
