import {
  Container1,
  SmallContainer,
  Title,
  SubTitle,
  TitlePage,
  TextNormal,
  Next,
  Btn,
  TextBtn,
  Inputs,
  TextArea,
  Photo,
  Areas,
  Lists,
  Scrolls,
} from './style';
import Menu from '../Menu/Menu';
import { useState } from 'react';

export default (props) => {
  return (
    <Container1>
      {/*<TitlePage>Nome Empresa</TitlePage>*/}
      <Scrolls>
        <Inputs placeholder="Titulo da Vaga" />
        <Inputs placeholder="Tipo de Contratação" />
        <Inputs placeholder="Remuneração" type={Number} />
        <TextArea
          placeholder="Requisitos"
          multiline={true}
          numberOfLines={20}
        />
        <TextArea
          placeholder="Descrição da vaga"
          multiline={true}
          numberOfLines={20}
        />
        <TextArea
          placeholder="Diferenciais (Opcional)"
          multiline={true}
          numberOfLines={20}
        />
        <TextArea
          placeholder="Benefícios (Opcional)"
          multiline={true}
          numberOfLines={20}
        />
        <Container1>
        <Btn>
          <TextBtn>Adicionar Vaga</TextBtn>
        </Btn>
        </Container1>
      </Scrolls>
      <Menu />
    </Container1>
  );
};
