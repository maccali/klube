import React, { Component } from 'react';

import AsyncStorage from '@react-native-community/async-storage';

import {
  Container,
  List,
  Event,
  Logo,
  View,
  Name,
  Data,
  DataText,
  Description,
  Distance,
  DistanceText
} from './styles';

import { Menu } from '../../components'


export default class Events extends Component {
  state = {
    events: [
      { id: 1, name: "Futebol dos Amigos", data: "06/12", distance: "600 m" },
      { id: 2, name: "Clube do Xadrez", data: "06/12", distance: "1 km" },
      { id: 3, name: "Clube do Estudos", data: "10/12", distance: "3 km" },
      { id: 4, name: "Clube do Estudos", data: "10/12", distance: "3 km" },
      { id: 5, name: "Clube do Estudos", data: "10/12", distance: "3 km" },
      { id: 6, name: "Clube do Estudos", data: "10/12", distance: "3 km" },
      { id: 7, name: "Clube do Estudos", data: "10/12", distance: "3 km" },
      { id: 8, name: "Clube do Estudos", data: "10/12", distance: "3 km" },
      { id: 9, name: "Clube do Estudos", data: "10/12", distance: "3 km" },
      { id: 10, name: "Clube do Estudos", data: "10/12", distance: "3 km" },
      { id: 11, name: "Clube do Estudos", data: "10/12", distance: "3 km" },
    ]
  };

  static navigationOptions = {
    title: 'Eventos',
  };

  async componentDidMount(){
    const test = await AsyncStorage.getItem('token');
    console.log(test)
  }

  handleNavigate = checkin => {
    const { navigation } = this.props;
    console.log(checkin);
    navigation.navigate('Checkin', { checkin });
  };

  render() {
    const { events } = this.state;


    return (
      <Container>
        <List
          data={events}
          keyExtractor={event => event.id}
          renderItem={({ item }) => (
            <Event onPress={() => this.handleNavigate(item)}>
              <Logo source={require("../../Images/e.png")} />
              <View>
                <Name>{item.name}</Name>
                <Description>
                  <Data>
                    <DataText>
                      {item.data}
                    </DataText>
                  </Data>
                  <Distance>
                    <DistanceText>
                      {item.distance}
                    </DistanceText>
                  </Distance>
                </Description>
              </View>
            </Event>
          )}
        />
        <Menu navigation={this.props.navigation}/>
      </Container >
    );
  }
}
