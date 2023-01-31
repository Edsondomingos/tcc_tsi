import {
  Container1,
  Top,
  Down,
  SmallContainer,
  Title,
  SubTitle,
  TitlePage,
  TextNormal,
  Next,
  Btn,
  TextBtn,
  Inputs,
} from '../styledComponents/Index';

export default (props) => {
  return (
    <Container1>
      {/*<Top>
        <TextBtn onPress={() => props.navigation.navigate('Login')}>
          Seja
        </TextBtn>
        <Btn>
          <TextBtn>></TextBtn>
        </Btn>
      </Top>*/}
      <SmallContainer>
        <TitlePage>CA</TitlePage>
        <SubTitle>Centro de Autossuficiência</SubTitle>
        <TextNormal>Aprenda a conseguir um emprego</TextNormal>
        <Next onPress={() => props.navigation.navigate('Login')}>
          <TextBtn>></TextBtn>
        </Next>
      </SmallContainer>
      <Down><TextBtn>
          Seja Bem Vindo!
        </TextBtn></Down>
    </Container1>
  );
};
