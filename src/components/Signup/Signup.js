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
import { doc, setDoc } from "firebase/firestore"

// Add a new document in collection "cities"
await setDoc(doc(db, "cities", "LA"), {
  name: "Los Angeles",
  state: "CA",
  country: "USA",
})
await setDoc(doc(db, "cities"), {
  name: "Los Angeles",
  email: "",
  senha: "",
})

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
