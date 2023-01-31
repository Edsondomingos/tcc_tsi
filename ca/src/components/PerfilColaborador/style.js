import styled from "styled-components/native";

export const Container1 = styled.View`
    flex: 1;
    background: #fff;
`;

export const Container3 = styled.View`
    background: #fff;
`;

export const ContainerRow = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
`;

export const SmallContainer = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TextNormal = styled.Text`
    font-size: 16px;
`;

export const TextArea = styled.TextInput`
  width: 250px;
  height: 300px;
  border: 1px solid #757575;
  border-radius: 7px;
  padding: 0 10px;
  margin: 10px 0;
  color: #aaa;
`;

export const Selects = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 75%;
`;

export const Photo = styled.Image`
  width: 200px;
  height: 200px;
  background: #000;
  border-radius: 50%;
`;

export const TitleAreas = styled.Text`
  font-size: 22px;
  border-bottom: 1px solid #000;
  text-align: left;
`;

export const Lists = styled.FlatList`
  
`;

export const Scrolls = styled.ScrollView`
  border-top: 1px solid #000;
`;

export const Plus = styled.Image`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-top: 20px;
`;

export const NewItem = styled.Text`
  // color: #04cefb;
  color: #086E7C;
  font-weight: 700;
  font-size: 15px;
  margin: 10px 0;
`;