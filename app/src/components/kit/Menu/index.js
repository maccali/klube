import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ItemMenu,
  List,
} from './styles';

export default class Menu extends Component {

  handleSearch = async () => {

  };

  handleAdd = async () => {
    this.props.navigation.navigate('SelectLocal');
  };

  render() {
    const { navigation } = this.props


    return (
      <Container>
        <ItemMenu onPress={() => this.handleSearch()}>
          <Icon name="search" size={30} color="#fff" />
        </ItemMenu>
        <ItemMenu onPress={() => this.handleAdd(navigation)}>
          <Icon name="add" size={30} color="#fff" />
        </ItemMenu>
      </Container>
    );
  }
}
