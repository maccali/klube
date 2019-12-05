import React, { Component } from 'react';

import { Events } from '../../components'

export default class EventsPage extends Component {

  static navigationOptions = {
    title: 'Eventos',
  };

  render() {
    return (
      <Events props={this.props} />
    );
  }
}
