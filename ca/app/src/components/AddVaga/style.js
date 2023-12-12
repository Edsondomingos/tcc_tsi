import styled from 'styled-components/native';

export const Container1 = styled.View`
    flex: 1;
    background: #fff;
`;

export const SmallContainer = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ContainerRow = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    width: 100%;
`;

export const Title = styled.Text`
    font-size: 48px;
    color: #086E7C;
    font-weight: bold;
`;

export const TitlePage = styled.Text`
    font-size: 35px;
    color: #086E7C;
    font-weight: bold;
    text-shadow: 2px 2px 2px #000;
`;

export const TextNormal = styled.Text`
    font-size: 16px;
`;

export const Btn = styled.TouchableHighlight`
    background: #086E7C;
    width: 100px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;    
    border-radius: 7px;
    box-shadow: 1px 1px 3px #000;
    padding: 2px;
    margin: 20px auto;
`;

export const TextBtn = styled.Text`
  font-family: 'Arial';
  font-weight: 700;
  font-size: 100%;
  color: #FFFFFF;
`;

export const Inputs = styled.TextInput`
  width: 250px;
  height: 30px;
  border: 1px solid #757575;
  border-radius: 7px;
  padding: 20px;
  margin: 10px 0;
  color: #aaa;
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

export const Scrolls = styled.ScrollView`
  border-top: 1px solid #000;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // padding-bottom: 100px;
  padding-top: 10%;
`;
