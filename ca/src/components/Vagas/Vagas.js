import {
  Container1,
  Container3,
  ContainerVaga,
  SmallContainer,
  ContainerRow,
  SubTitle,
  TextNormal,
  Btn,
  TextBtn,
  Inputs,
  Lists,
  Scrolls,
  SmallLogoImpresa
} from './style';
import { useState } from 'react';
import Menu from '../Menu/Menu'

const conteudo = [
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
];

export default (props) => {
  const [vagas, setVagas] = useState([{}]);

  return (
    <Container1>
      <Container1>
        <SmallContainer>
          <Inputs placeholder="Procure Vagas" />
          <Btn>
            <TextBtn>Procurar</TextBtn>
          </Btn>
        </SmallContainer>
      </Container1>

      {/*<Scrolls>*/}
      <Container3>
      {/*<Scrolls>*/}
        <Lists
          data={conteudo}
          renderItem={({ item }) => {
            return (
              <ContainerVaga>
                <SubTitle>{item.vaga}</SubTitle>
                <TextNormal>+ Contratação: {item.tipo}</TextNormal>
                <TextNormal>+ Salário: {item.remuneracao}</TextNormal>
                {/*<TextNormal>+ Requisitos: {item.requisitos}</TextNormal>*/}
                <ContainerRow>
                  <TextNormal>Logo/Foto Empresa</TextNormal>
                    {/*source={require('../../../imgs/plus.png')}*/}
                  <SmallLogoImpresa 
                  />
                  <TextNormal>Nome Empresa</TextNormal>
                </ContainerRow>
              </ContainerVaga>
            );
          }}
        />
        {/*</Scrolls>*/}
      </Container3>
      {/*</Scrolls> */}
      <Menu>
        
      </Menu>  
    </Container1>
  );
};
