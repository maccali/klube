import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View'';

export const FormLabel = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const FormInput = styled.TextInput`
  height: 40px;
  background: #eee;
  border-radius: 4px;
  border: 1px solid #eee;
`;

export const SubmitForm = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #7159c1;
  border-radius: 4px;
  padding: 12px;
  margin-top: 20px;
  opacity: ${props => (props.loading ? 0.7 : 1)};
`;

export const SubmitFormText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;


