import {
  Container1,
  ContainerRow,
  Btn,
  TextBtn,
  Inputs,
  TextArea,
  Scrolls,
} from './style';
import { useState } from 'react';

export default (props) => {
  return (
    <Container1>
      <Scrolls>
        <Inputs placeholder="Nome Empresa" />
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

        <ContainerRow>
          <Btn onPress={() => props.navigation.navigate('Admin')}>
            <TextBtn>Cancelar</TextBtn>
          </Btn>
          <Btn onPress={() => props.navigation.navigate('Admin')}>
            <TextBtn>Criar</TextBtn>
          </Btn>
        </ContainerRow>
      </Scrolls>
    </Container1>
  );
};
