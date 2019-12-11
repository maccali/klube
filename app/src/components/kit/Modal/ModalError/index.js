import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ModalContainer,
  Text,
  Button
} from './styles';


export default class ModalError extends Component {

  closeModal() {
    this.props.showModal()
  }

  render() {

    const { text } = this.props;
    return (
      <Container>
        <ModalContainer>
        <Text>{text}</Text>
        </ModalContainer>
        <Button onPress={() => this.closeModal()}>
          <Icon name="close" size={18} color="#fff" />
        </Button>
      </Container>
    );
  }
}
