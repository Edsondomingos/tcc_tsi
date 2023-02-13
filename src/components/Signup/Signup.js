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
// import { RadioButton } from 'react-native-paper';
// import CheckBox from 'expo-checkbox';
import {app,db} from '../../components/config/firebaseconfig'
import { collection, addDoc } from "firebase/firestore"

// Add a new document in collection "cities"
// await setDoc(doc(db, "cities", "LA"), {
//   name: "Los Angeles",
//   state: "CA",
//   country: "USA",
// })
// await setDoc(doc(db, "usuarios","tyxVFfvUmsiEemyj19gt"), {
//   name: "teste",
//   email: "email",
//   senha: "senha",
// })
// await setDoc(doc(db, "usuarios", "1"), data)


export default (props) => {
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  return (
    <Container1>
      <SmallContainer>
        <TitlePage>Criar Conta</TitlePage>

        <Inputs
          value={nome}
          onChange={() => setNome(nome)}
          placeholder="Nome"
        />
        <Inputs
          value={email}
          onChange={() => setEmail(email)}
          placeholder="Email"
        />
        <Inputs
          value={senha}
          onChange={() => setSenha(senha)}
          placeholder="Senha"
        />

        <ContainerRow>
          <Btn onPress={() =>
            props.navigation.navigate('Admin')}>
            <TextBtn>Cancelar</TextBtn>
          </Btn>
          <Btn onPress={() => {
            // Add a new document with a generated id.
            // const docRef = await addDoc(collection(db, "usuarios"), {
            //   name: "Tokyo",
            //   country: "Japan"
            // });
            props.navigation.navigate('Admin')
          }}>
            <TextBtn>Criar</TextBtn>
          </Btn>
        </ContainerRow>
      </SmallContainer>
    </Container1>
  );
};
