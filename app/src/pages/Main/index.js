import React, { Component } from 'react';

import api from '../../services/api'

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
    events: []
  };

  static navigationOptions = {
    title: 'Eventos',
  };

  async componentDidMount(){
    const response = await api.get('/events');

    this.setState({
      events: response.data,
    })

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
                      06/12
                      {/* {item.data} */}
                    </DataText>
                  </Data>
                  <Distance>
                    <DistanceText>
                      600m
                      {/* {item.distance} */}
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
