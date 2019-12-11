import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  FormInput,
  Box,
  IconCont,
} from './styles';


export default class IconInput extends Component {

  render() {
    const { iconName, iconColor, placeholder}
    return (
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

    );
  }
}
