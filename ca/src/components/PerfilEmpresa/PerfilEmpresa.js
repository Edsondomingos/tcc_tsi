import {
  Container1,
  Container3,
  SmallContainer,
  ContainerRow,
  TextNormal,
  Photo,
  TitleAreas,
  Plus,
  NewItem,
  Selects,
  Scrolls,
} from './style';
import { useState } from 'react';
import CheckBox from 'expo-checkbox';
import Menu from '../Menu/Menu';
// import Video from 'react-native-video'
// import VideoPalyer from 'react-native-video-controls'
// <VideoPalyer
//     source={{ url: 'https://www.youtube.com/watch?v=WlRoBjQyaiE'}}

// />
export default ({ navigation }) => {
  const [publico, setPublico] = useState(true);

  return (
    <Container1>
      <Scrolls>
        {/**/}
        <ContainerRow>
          <TextNormal>Editar Perfil</TextNormal>
          {/* É necessario deixar opcional, pois publico ajuda propagar mais */}
          <Selects>
            <CheckBox
              value={publico}
              onValueChange={() => setPublico(!publico)}
              color={publico ? '#4630EB' : '#000000'}
              style={{ marginRight: '5px' }}
            />
            <TextNormal>Perfil Público</TextNormal>
          </Selects>
        </ContainerRow>
        {/**/}
        <SmallContainer>
          <Photo />
          <Container3>
            <TextNormal>Casado, 29</TextNormal>
            <TextNormal>Endereço</TextNormal>
            <TextNormal>(84)9 9999-9999</TextNormal>
            <TextNormal>Redes sociais:</TextNormal>
            <TextNormal>linkedin.com/in/fulano-de-tal</TextNormal>
            <TextNormal>github.com/fulano-de-tal</TextNormal>
            <TextNormal>Minhas tags</TextNormal>
          </Container3>
        </SmallContainer>

        <Container1>
          {/*<Container>*/}
          <TitleAreas>Sobre</TitleAreas>
          {/* Lista automatizada aqui */}
          <SmallContainer>
            <Plus source={require('../../../imgs/plus.png')} />
            <NewItem>Editar Sobre</NewItem>
          </SmallContainer>

          <TitleAreas>Missão</TitleAreas>
          <SmallContainer>
            <Plus source={require('../../../imgs/plus.png')} />
            <NewItem>Editar missão</NewItem>
          </SmallContainer>

          <TitleAreas>Visão</TitleAreas>
          <SmallContainer>
            <Plus source={require('../../../imgs/plus.png')} />
            <NewItem>Editar Visão</NewItem>
          </SmallContainer>

          <TitleAreas>Valores</TitleAreas>
          <SmallContainer>
            <Plus source={require('../../../imgs/plus.png')} />
            <NewItem>Editar Valores</NewItem>
          </SmallContainer>

          <SmallContainer>
            <TitleAreas>
              <Plus source={require('../../../imgs/plus.png')} />
              <NewItem>Criar novo campo</NewItem>
            </TitleAreas>
          </SmallContainer>
          {/*</Container>*/}
        </Container1>
      </Scrolls>
      {/*
       */}
      <Menu />
    </Container1>
  );
};
