import {
  Container1,
  Container3,
  SmallContainer,
  Title,
  SubTitle,
  TitlePage,
  TextNormal,
  Next,
  Btn,
  TextBtn,
  Inputs,
  Photo,
  Areas,
  Lists,
  Scrolls,
  TextArea,
  Selects,
  ContainerRow,
} from './style';
import Menu from '../Menu/Menu';
import CheckBox from 'expo-checkbox';
import { useState } from 'react';

export default (props) => {
  const [whatsapp, setWhatsapp] = useState(true);
  const [insta, setInsta] = useState(true);

  return (
    <Container1>
      <TextNormal>
        Pode adicionar apenas a imagem, descrição ou os dois.
      </TextNormal>
      <Scrolls>
        <ContainerRow>
          <Selects>
            <CheckBox
              value={whatsapp}
              onValueChange={() => setWhatsapp(!whatsapp)}
              color={whatsapp ? '#4630EB' : '#000000'}
              style={{ marginRight: '5px' }}
            />
            <TextNormal>whatsapp</TextNormal>
          </Selects>

          <Selects>
            <CheckBox
              value={insta}
              onValueChange={() => setInsta(!insta)}
              color={insta ? '#4630EB' : '#000000'}
              style={{ marginRight: '5px' }}
            />
            <TextNormal>Instagram</TextNormal>
          </Selects>
        </ContainerRow>
        <Photo />
        <TextArea placeholder="Descrição" multiline={true} numberOfLines={20} />

        <Btn>
          <TextBtn>Publicar Vaga</TextBtn>
        </Btn>
      </Scrolls>
      <Menu />
    </Container1>
  );
};
