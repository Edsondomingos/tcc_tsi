import {
  Container1,
  Container3,
  SmallContainer,
  ContainerRow,
  Title,
  SubTitle,
  TitlePage,
  TextNormal,
  Btn,
  TextBtn,
  Inputs,
  Selects,
} from './style';
import { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import CheckBox from 'expo-checkbox';

export default (props) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <Container1>
      <SmallContainer>
        <TitlePage>Criar Conta</TitlePage>

        <Inputs placeholder="Nome" />
        <Inputs placeholder="Email" />
        <Inputs placeholder="Senha" />

        <ContainerRow>
          <Btn onPress={() => props.navigation.navigate('Admin')}>
            <TextBtn>Cancelar</TextBtn>
          </Btn>
          <Btn onPress={() => props.navigation.navigate('Admin')}>
            <TextBtn>Criar</TextBtn>
          </Btn>
        </ContainerRow>
      </SmallContainer>
    </Container1>
  );
};
