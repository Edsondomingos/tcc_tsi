import styled from "styled-components/native";

export const Container1 = styled.View`
    flex: 1;
    background: #fff;
`;

export const Container2 = styled.View`
    background: #fff;
    // margin-bottom: 5px;
    display: flex;
    align-itens: flex-end;
    justify-content: center;
    // height: 10px;
`;

export const Container3 = styled.View`
    flex: 6;
    background: #fff;
`;

export const ContainerVaga = styled.View`
    background: #fff;
    border-left: 3px solid #535353;
    border-bottom: 2px solid #535353;
    margin: 5px;
    padding: 3px;
    border-radius: 5px
    box-shadow: 0 0 1px #000;
`;

export const ContainerRow = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const SmallContainer = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SubTitle = styled.Text`
    font-size: 22px;
    color: #086E7C;
    font-weight: 700;
`;

export const TextNormal = styled.Text`
    font-size: 16px;
    font-family: 'helverita';
`;

export const Btn = styled.TouchableHighlight`
    background: #086E7C;
    width: 150px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;    
    border-radius: 7px;
    box-shadow: 1px 1px 3px #000;
    padding: 2px;
`;
export const Btn2 = styled.TouchableHighlight`
    
`;

export const TextBtn = styled.Text`
  font-family: 'Arial';
  font-weight: 700;
  font-size: 100%;
  color: #FFFFFF;
`;

export const Inputs = styled.TextInput`
  width: 90%;
  height: 30px;
  border: 1px solid #757575;
  border-radius: 7px;
  padding: 20px;
  margin: 10px 0;
  color: #aaa;
  font-weight: bold;
`;

export const Lists = styled.FlatList`
  
`;

export const Scrolls = styled.ScrollView`
  border-top: 1px solid #000;
`;

export const SmallLogoImpresa = styled.Image`
    width: 20px;
    hight: 20px;
`;

export const Logar = styled.Image`
    width: 50px;
    height: 50px;
    border: 1px solid #000;
    border-radius: 50%;
    background: #000;
`;