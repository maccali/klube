import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';


export const Container = styled.View`
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

export const SubmitForm = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #eee;
  border-radius: 50px;
  padding: 5px;
  margin-right: 70px;
  margin-left: 70px;
  margin-top: 20px;
  /* opacity: ${props => (props.loading ? 0.7 : 1)}; */
`;

// export const SubmitFormText = styled.Text`
//   font-size: 14px;
//   font-weight: bold;
//   color: #fff;
//   text-transform: uppercase;
// `;


