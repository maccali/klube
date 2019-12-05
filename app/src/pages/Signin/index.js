import React, { Component } from 'react';

import { Container } from './styles';

import { Events, Signin } from '../../components/index'

export default class SigninPage extends Component {


  static navigationOptions = {
    title: 'Login',
  };

  // componentDidMount(){
  //   const { navigation } = this.props;
  //   navigation.navigate('Signup');
  // }

  render() {
    return (
      <Container>
        <Signin props={this.props} />
      </Container>
    );
  }
}
