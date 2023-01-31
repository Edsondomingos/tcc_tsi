import styled from "styled-components/native";

export const Container1 = styled.View`
    flex: 1;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Container3 = styled.View`
    flex: 3;
    background: #fff;
    
`;

export const SmallContainer = styled.View`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 48px;
    color: #086E7C;
    font-weight: bold;
`;

export const SubTitle = styled.Text`
    font-size: 22px;
    color: #086E7C;
    font-weight: 700;
`;

export const TitlePage = styled.Text`
    font-size: 50px;
    color: #086E7C;
    font-weight: bold;
    text-shadow: 2px 2px 2px #000;
`;

export const TextNormal = styled.Text`
    font-size: 16px;
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
    margin-bottom: 50px
`;

export const SmallBtn = styled.TouchableHighlight`
    background: #086E7C;
    width: 100px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;    
    border-radius: 7px;
    box-shadow: 1px 1px 3px #000;
    padding: 2px;
    margin: 10px auto;
    border-bottom: 1px solid #000;
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

export const Next = styled.TouchableHighlight`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #086E7C;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0;
`;

export const Selects = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 75%;
  margin: 10px 0;
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

export const SmallLogoImpresa = styled.Image`
    width: 20px;
    hight: 20px;
`;

// https://th.bing.com/th?id=ORMS.4e6a1d7d0fd34ae1696b10b5343ba688&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1&p=0