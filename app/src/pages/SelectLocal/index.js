import React, { Component } from 'react';

import { SelectLocal } from '../../components'

import {
  Container,
} from './styles';

export default class SelectLocalPage extends Component {

  static navigationOptions = {
    title: 'Selecione o local',
  };

  render() {
    return (
      <Container>
          <SelectLocal props={this.props}/>
      </Container>
    );
  }
}
