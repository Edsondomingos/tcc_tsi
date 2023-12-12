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
} from './style';
import { useState } from 'react';
import { app } from '../../components/config/firebaseconfig'
import { getDocs, getFirestore, collection } from "firebase/firestore"
const db = getFirestore(app)

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

async function getVagas(db){
  const vagas = collection(db, 'vagas')
  const vagaSnapchot = await getDocs(vagas)
  const vagaList = vagaSnapchot.docs.map(doc => doc.data())
  console.log(vagaList, typeof vagaList)
  console.log(vagaList[0].teste, typeof vagaList[0].teste)
  console.log(Object.keys(vagaList), typeof Object.keys(vagaList))
  // dados = vagaList
  return vagaList
}

// conteudo = getVagas(db)

// let dados = getVagas(db)
// function procura(){
//   // if(conteudo.includes(palavra)){
//     return 
//   // }
// }


export default (props) => {
  const [vagas, setVagas] = useState(getVagas(db));

  return (
    <Container1>
      <Container2>
        <Btn2
          onPress={() => props.navigation.navigate('Login')}>
          <Logar
            source={require('../../../imgs/perfilBranco.png')}
          />
        </Btn2>
        {/*<SmallContainer>
          <Inputs
            value={vagas}
            placeholder="Procure Vagas"
            onChange={() => setVagas(vagas)}
          />
          <Btn onPress={() => procura()}>
            <TextBtn>Procurar</TextBtn>
          </Btn>
        </SmallContainer>*/}

      </Container2>

      <Container3>
        <Scrolls>
          <Lists
            data={conteudo}
            renderItem={({ item }) => {
              return (
                <ContainerVaga
                  onClick={() =>
                    props.navigation.navigate('Vaga', {
                      vaga: item.vaga,
                      tipo: item.tipo,
                      remuneracao: item.remuneracao,
                    })
                  }>
                  <SubTitle>{item.vaga}</SubTitle>
                  <TextNormal>{typeof vagas}</TextNormal>
                  <TextNormal>+ Contratação: {item.tipo}</TextNormal>
                  <TextNormal>+ Salário: {item.remuneracao}</TextNormal>
                  <TextNormal>+ Empresa: {'Empresa'}</TextNormal>
                </ContainerVaga>
              );
            }}
          />
        </Scrolls>
      </Container3>
      {/*</Scrolls> 
      <Menu />*/}
    </Container1>
  );
};
