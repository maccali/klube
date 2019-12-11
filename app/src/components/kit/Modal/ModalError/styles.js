import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  align-content: center;
  justify-content: center;
  margin-top: 25px;
`;

export const ModalContainer = styled.View`
  border-radius: 50px;
  padding-top: 10px;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 20px;
  background-color: #ed4337;
  align-items: center;
  border-width: 1px;
  border-color: #fff;
`


export const Button = styled.TouchableOpacity`
  justify-content: space-around;
  margin: auto;
  background-color: #ed4337;
  padding: 5px;
  margin-top: -15px;
  border-radius: 50px;
  border-width: 1px;
  border-color: #fff;
`
export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
`

