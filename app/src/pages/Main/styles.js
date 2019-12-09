import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 1px;
  padding-right: 20px;
  padding-left: 20px;
`;

export const Event = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;

export const Logo = styled.Image`
  width: 60px;
  height: 60px;
  margin-top: 15px;
  margin-right: 20px;
`;

export const View = styled.View``
export const Name = styled.Text`
  font-size: 19px;
  font-weight: bold;
  margin-top: 15px;
`;

export const Description = styled.View`
  flex: 1;
  flex-direction: row;
  padding-top: 8px;
`;

export const Data = styled.View`
  background-color: #D9D9D9;
  padding: 5px;
  padding-right: 15px;
  padding-left: 15px;
  border: 1px solid #777;
  border-radius: 50px;
`;

export const Distance = styled.View`
  background-color: #CEDEF2;
  padding: 5px;
  padding-right: 15px;
  padding-left: 15px;
  border: 1px solid #777;
  margin-left: 10px;
  border-radius: 50px;
`;

export const DataText = styled.Text`
  font-size: 16px;
`;

export const DistanceText = styled.Text`
  font-size: 16px;
`;
