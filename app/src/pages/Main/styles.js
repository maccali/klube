import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  /* padding: 30px; */
  padding-right: 20px;
  padding-left: 20px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
`;

export const Event = styled.View`
  align-items: center;
`;

