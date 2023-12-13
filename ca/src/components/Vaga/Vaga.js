import {
  Container1,
  Container,
  Container4,
  ContainerRow,
  SmallContainer,
  Title,
  SubTitle,
  TextNormal,
  Btn,
  TextBtn,
  Scrolls,
  TitleAreas,
  SmallLogoImpresa,
  Logar,
  Btn2,
} from './style';
import Menu from '../Menu/Menu'

export default (props) => {
  let vaga = props.route.params.vaga ? props.route.params.vaga : 'Vaga';
  let tipo = props.route.params.tipo ? props.route.params.tipo : 'tipo'
  let remuneracao = props.route.params.remuneracao ? props.route.params.remuneracao : 'remuneracao'
  let requisitos = props.route.params.requisitos ? props.route.params.requisitos : 'requisitos'

  return (
    <Container1>
    
      <Container>
        <ContainerRow>
          {/*<SmallLogoImpresa source={require('../../../imgs/plus.png')}/>*/}
          <Title>Nome Empresa</Title>
        </ContainerRow>

        <SubTitle>{vaga}</SubTitle>
        <TextNormal>+ Contratação: {tipo}</TextNormal>
        <TextNormal>+ Remuneração: {remuneracao}</TextNormal>
      </Container>

      <Container4>
        <Scrolls>
          <TitleAreas>Requisitos:</TitleAreas>
          <TextNormal> {requisitos}</TextNormal>

          <TitleAreas>Descrição:</TitleAreas>
          <TextNormal> {'Descrição'}</TextNormal>

          <TitleAreas>Diferenciais:</TitleAreas>
          <TextNormal> {'Diferenciais'}</TextNormal>

          <TitleAreas>Benefícios:</TitleAreas>
          <TextNormal> {'Benefícios'}</TextNormal>
        </Scrolls>
      </Container4>

        {/*<SmallContainer>
          <Btn
            onPress={() => props.navigation.navigate('Vagas')}
          >
            <TextBtn>Candidatar-se</TextBtn>
          </Btn>
        </SmallContainer>
        <Menu />*/}
        <Btn2
          onPress={() => props.navigation.navigate('Vagas')}>
        <Logar 
          source={require('../../../imgs/homeBranco.png')} 
        />
      </Btn2>
    </Container1>
  );
};
