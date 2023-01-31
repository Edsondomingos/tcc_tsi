import {
  Container1,
  Container3,
  SmallContainer,
  Title,
  SubTitle,
  TitlePage,
  TextNormal,
  Btn,
  TextBtn,
  Inputs,
  Selects,
} from './style';
import { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import CheckBox from 'expo-checkbox';

export default (props) => {
  const [casado, setCasado] = useState(false);
  const [filhos, setFilhos] = useState(false);
  const [termo, setTermo] = useState(false);
  const [checked, setChecked] = useState('first');
  
  return (
    <Container1>
      <SmallContainer>
        <TitlePage>Criar Conta</TitlePage>
        <Selects>
          <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
          />
          <TextNormal>Empresa</TextNormal>
          <RadioButton
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
          />
          <TextNormal>Colaborador</TextNormal>
        </Selects>
        <Inputs placeholder="Nome" />
        <Inputs placeholder="Email" />
        <Inputs placeholder="Senha" />

        {/*<Selects          
          style={checked === 'second' ? {display:'none'} : ''}
        
        >
          <CheckBox
            value={casado}
            onValueChange={() => setCasado(!casado)}
            color={casado ? '#4630EB' : '#000000'}
            style={{ marginRight: '5px' }}
          />
          <TextNormal>Casado</TextNormal>
        </Selects>

        <Selects
          style={checked === 'second' ? {display:'none'} : ''}
        >
          <CheckBox
            value={filhos}
            onValueChange={() => setFilhos(!filhos)}
            color={filhos ? '#4630EB' : '#000000'}
            style={{ marginRight: '5px' }}
          />
          <TextNormal>Filhos</TextNormal>
        </Selects>*/}

        <Selects>
          <CheckBox
            value={termo}
            onValueChange={() => setTermo(!termo)}
            color={termo ? '#4630EB' : '#000000'}
            style={{ marginRight: '5px' }}
          />
          <TextNormal>
            Ao criar a conta, concordo com todos os termos de uso.
          </TextNormal>
        </Selects>
        <Btn onPress={() => props.navigation.navigate('Vagas')}>
          <TextBtn>Criar Conta</TextBtn>
        </Btn>
      </SmallContainer>
    </Container1>
  );
};
