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
import { doc, getDoc } from "firebase/firestore"

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

let dados
const docRef = doc(db, "vagas", "l1MHOso9qt9oavYxvDii");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  dados = docSnap.data()
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
  dados = "NADA"
}

function procura(){
  // if(conteudo.includes(palavra)){
    return 
  // }
}

export default (props) => {
  const [vagas, setVagas] = useState();

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

      <TextNormal>{dados}</TextNormal>
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
