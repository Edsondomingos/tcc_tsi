import {
  Container1,
  Container2,
  Container3,
  ContainerVaga,
  SmallContainer,
  ContainerRow,
  SubTitle,
  TextNormal,
  Btn,
  Btn2,
  TextBtn,
  Inputs,
  Lists,
  Scrolls,
  Logar,
} from './style'
import { useState } from 'react'

let conteudo = [
  {
    vaga: 'Desenvolvedor mobile jr',
    tipo: 'CLT',
    remuneracao: 2000,
    requisitos: 'conhecimentos em react native',
  },
  {
    vaga: 'Desenvolvedor Python',
    tipo: 'CLT',
    remuneracao: 3000,
    requisitos: 'Desenvolvimento em POO',
  },
  {
    vaga: 'Desenvolvedor Python',
    tipo: 'CLT',
    remuneracao: 3000,
    requisitos: 'Desenvolvimento em POO',
  },
  {
    vaga: 'Desenvolvedor Python',
    tipo: 'CLT',
    remuneracao: 3000,
    requisitos: 'Desenvolvimento em POO',
  },
  {
    vaga: 'Desenvolvedor Python',
    tipo: 'CLT',
    remuneracao: 3000,
    requisitos: 'Desenvolvimento em POO',
  },
  {
    vaga: 'Desenvolvedor Python',
    tipo: 'CLT',
    remuneracao: 3000,
    requisitos: 'Desenvolvimento em POO',
  },
  {
    vaga: 'Desenvolvedor Python',
    tipo: 'CLT',
    remuneracao: 3000,
    requisitos: 'Desenvolvimento em POO',
  },
  {
    vaga: 'Desenvolvedor Python',
    tipo: 'CLT',
    remuneracao: 3000,
    requisitos: 'Desenvolvimento em POO',
  },
];

export default function App() {
  return (
    <Container1>
      <Container2>
        <Btn2>
          <Logar
            source={require('./imgs/perfilBranco.png')}
          />
        </Btn2>

      </Container2>

      <Container3>
        <Scrolls>
          <Lists
            data={conteudo}
            renderItem={({ item }) => {
              return (
                <ContainerVaga>
                  <SubTitle>SubTitle</SubTitle>
                  <TextNormal>Vaga</TextNormal>
                  <TextNormal>Tipo</TextNormal>
                  <TextNormal>+ Salário: </TextNormal>
                  <TextNormal>+ Empresa:</TextNormal>
                </ContainerVaga>
              );
            }}
          />
        </Scrolls>
      </Container3>
    </Container1>
  );
}


