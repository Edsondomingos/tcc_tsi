import {
  Container1,
  Container2,
  SmallContainer,
  Title,
  SubTitle,
  TitlePage,
  TextNormal,
  TextNormal2,
  Btn,
  TextBtn,
  Inputs,
} from './style';

export default (props) => {
  return (
    <Container1>
      <SmallContainer>
        <TitlePage>Login</TitlePage>
        <Inputs placeholder="Email" />
        <Inputs placeholder="Senha" />
        <Btn>
          <TextBtn>ENTRAR</TextBtn>
        </Btn>
      </SmallContainer>
      <Container2>
        <TextNormal>Não tem uma conta?</TextNormal>
        <TextNormal2 onPress={() => props.navigation.navigate('Signup')}>
          Crie uma conta agora
        </TextNormal2>
      </Container2>
    </Container1>
  );
};
