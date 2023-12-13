import {
  Container1,
  Container2,
  SmallContainer,
  TitlePage,
  Btn,
  Btn2,
  TextBtn,
  Logar,
} from './style';
import Menu from '../Menu/Menu'

export default (props) => {
  return (
    <Container1>
      <Btn2
          onPress={() => props.navigation.navigate('Vagas')}>
        <Logar 
          source={require('../../../imgs/homeBranco.png')} 
        />
      </Btn2>
    <Container2>
      <SmallContainer>
        <TitlePage>Bem vindo</TitlePage>
        <Btn
          onPress={() => { props.navigation.navigate('Signup')}}
        >
          <TextBtn>Cadastrar Usuário</TextBtn>
        </Btn>

        <Btn
          onPress={() => { props.navigation.navigate('AddVaga')}}
        >
          <TextBtn>Adicionar Oportunidade</TextBtn>
        </Btn>
      </SmallContainer>
      </Container2>
      {/*<Menu />*/}
    </Container1>
  );
};
