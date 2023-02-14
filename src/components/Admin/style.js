import styled from "styled-components/native";

export const Container1 = styled.View`
    flex: 1;
    background: #fff;
`;

export const Container2 = styled.View`
    flex: 1;
    background: #fff;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

export const SmallContainer = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

export const TitlePage = styled.Text`
    font-size: 50px;
    color: #086E7C;
    font-weight: bold;
    text-shadow: 2px 2px 2px #000;
`;

export const Btn = styled.TouchableHighlight`
    background: #086E7C;
    width: 200px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;    
    border-radius: 7px;
    box-shadow: 1px 1px 3px #000;
    padding: 2px;
    margin: 30px 0;
`;

export const Btn2 = styled.TouchableHighlight`
    margin: auto;
`;

export const TextBtn = styled.Text`
  font-family: 'Arial';
  font-weight: 700;
  font-size: 100%;
  color: #FFFFFF;
`;

export const Logar = styled.Image`
    width: 50px;
    height: 50px;
    border: 1px solid #000;
    border-radius: 50%;
    background: #000;
`;