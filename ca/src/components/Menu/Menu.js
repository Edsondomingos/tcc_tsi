import { ContainerRow, Btn, Buttons } from './style';

export default (props) => {
  return (
    <ContainerRow>
      <Btn onPress={() => props.navigation.navigate('Vagas')}>
        <Buttons
          source={require('../../../imgs/homeBranco.png')}
        />
      </Btn>

      <Btn 
        onPress={() => props.navigation.navigate('Vaga')}>
        <Buttons
         source={require('../../../imgs/postBranco.png')}
        />
      </Btn>

      <Btn  
          onPress={() => props.navigation.navigate('Perfil')}>
        <Buttons
          source={require('../../../imgs/perfilBranco.png')}
        />
      </Btn>
    </ContainerRow>
  );
};
