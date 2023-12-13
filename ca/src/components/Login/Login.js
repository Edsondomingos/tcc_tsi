import {
  Container1,
  Container2,
  SmallContainer,
  ContainerRow,
  Title,
  SubTitle,
  TitlePage,
  TextNormal,
  TextNormal2,
  Btn,
  TextBtn,
  Inputs,
} from './style';
import Menu from '../Menu/Menu'

export default (props) => {
  return (
    <Container1>
      <SmallContainer>
        <TitlePage>Login</TitlePage>
        <Inputs placeholder="Email" />
        <Inputs placeholder="Senha" />
        {/*<Btn
          onPress={() => props.navigation.navigate('Admin')}
        >
          <TextBtn>ENTRAR</TextBtn>
        </Btn>*/}
        <ContainerRow>
          <Btn onPress={() => props.navigation.navigate('Vagas')}>
            <TextBtn>Cancelar</TextBtn>
          </Btn>
          <Btn onPress={() => props.navigation.navigate('Admin')}>
            <TextBtn>Entrar</TextBtn>
          </Btn>
        </ContainerRow>
      </SmallContainer>
      
      {/*<Menu />*/}
    </Container1>
  );
};
