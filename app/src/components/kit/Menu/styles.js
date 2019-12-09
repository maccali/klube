import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 55px;
  flex-direction: row;
  border-top-width: 1px;
  border-top-color: #fff;
`;

export const ItemMenu = styled.TouchableOpacity`
  flex: 1;
  background-color: #7159c1;
  justify-content: center;
  align-items: center;
  /* width: 150px; */
  width: 50%;
  border-left-width: 1px;
  border-left-color: #fff;
`

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  horizontal: true,
})`
  margin-top: 1px;
`;


