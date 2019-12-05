import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ItemMenu,
} from './styles';

export default class Menu extends Component {

  handleSearch = async (props) => {
    // const { navigation } = this.props;
    // navigation.navigate('Main');
  };

  handleAdd = async (props) => {
    const { navigation } = props;
    navigation.navigate('NewEvent');
  };

  render() {
    const { props } = this.props

    return (
      <Container>
        <ItemMenu  onPress={() => this.handleSearch(props)}>
          <Icon name="search" size={30} color="#fff" />
        </ItemMenu>
        <ItemMenu  onPress={() => this.handleAdd(props)}>
          <Icon name="add" size={30} color="#fff" />
        </ItemMenu>
      </Container>
    );
  }
}
