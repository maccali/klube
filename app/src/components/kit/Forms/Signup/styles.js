import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';


export const Container = styled.KeyboardAvoidingView`
  background-color: #fff;
  padding: 10px;
`;

export const Box = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: #eee;
  margin-top: 25px;
`;

export const IconCont = styled.View`
  padding: 4px;
  margin-left: 15px;
  margin-right: 5px;
  color: #7159c1;
`;


export const Logo = styled.Image`
  height: 200px;
  width: 200px;
  align-self: center;
`;

export const FormInput = styled.TextInput`
  flex: 1;
  height: 50px;
`;

// export const Button = styled(RectButton)`
export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background: #eee;
  border-radius: 50px;
  padding: 15px;
  margin-top: 20px;
  border: 1px solid #7159c1;
  /* opacity: ${props => (props.loading ? 0.7 : 1)}; */
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #7159c1;
  text-transform: uppercase;

`;


