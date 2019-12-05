import React, { Component } from 'react';

import { Events } from '../../components'

import {
  Container,
} from './styles';

export default class EventsPage extends Component {

  static navigationOptions = {
    title: 'Eventos',
  };

  render() {
    return (
      <Container>
          <Events props={this.props} />
      </Container>
    );
  }
}
