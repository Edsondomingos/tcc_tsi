import styled from "styled-components/native";

export const ContainerRow = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;    
    background: #086E7C;
    margin: 0;
    border-top-right-radius: 7px;
    border-top-left-radius: 7px;
    height: 50px;
`;

export const Buttons = styled.Image`
    width: 40px;
    height: 40px;
    margin: 0 10px;
    border: 1px solid #fff;
    padding: 5px;
`;

export const Btn = styled.TouchableHighlight`
    background: #086E7C;
    width: 33%;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;    
    border-radius: 7px;
    // box-shadow: 1px 1px 3px #000;
    padding: 2px;
    margin: 20px auto;
`;
