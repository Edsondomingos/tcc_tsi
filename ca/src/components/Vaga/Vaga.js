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
  SmallLogoImpresa
} from './style';
import Menu from '../Menu/Menu'

export default (props) => {
  const vaga = 'Vaga'; //(props.route.params.vaga) ? props.route.params.vaga : 'Teste';
  {
    /**/
  }
  const tipo = 'CLT' //props.route.params.tipo ? props.route.params.tipo : ""
  const remuneracao = '2000,00' //props.route.params.remuneracao ? props.route.params.remuneracao : ""
  const requisitos = 'Requisitos:' //props.route.params.requisitos ? props.route.params.requisitos : ""

  return (
    <Container1>
    
      <Container>
        <ContainerRow>
          <SmallLogoImpresa source={require('../../../imgs/plus.png')}/>
          <Title>Nome Empresa</Title>
        </ContainerRow>

        <SubTitle>{vaga}</SubTitle>
        <TextNormal>+ Contratação: {tipo}</TextNormal>
        <TextNormal>+ Remuneração: {remuneracao}</TextNormal>
      </Container>

      <Container4>
        <Scrolls>
          <TitleAreas> {requisitos}</TitleAreas>
          <TextNormal> {'Requisitos'}</TextNormal>

          <TitleAreas> Descrição:</TitleAreas>
          <TextNormal> {'Descrição'}</TextNormal>

          <TitleAreas> Diferenciais:</TitleAreas>
          <TextNormal> {'Diferenciais'}</TextNormal>

          <TitleAreas> Benefícios:</TitleAreas>
          <TextNormal> {'Benefícios'}</TextNormal>
        </Scrolls>
      </Container4>

        <SmallContainer>
          <Btn>
            <TextBtn>Candidatar-se</TextBtn>
          </Btn>
        </SmallContainer>
        <Menu />
    </Container1>
  );
};
